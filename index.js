const serverless = require("serverless-http");
const express = require("express");
const axios = require("axios");
const errorMiddleware = require("@reactor4/forklift").errorMiddleware;
const IO = require("@reactor4/forklift").IO;
const asyncMiddleware = require("@reactor4/forklift").asyncMiddleware;
const bodyParser = require("body-parser");
const basicAuth = require("express-basic-auth");

const app = express();

app.use(basicAuth({
  users: { user: process.env.ACCESS_PASSWORD },
}))

app.use(bodyParser.json());

const router = express.Router();

const handleBusinessLogic = () => {
  return asyncMiddleware(async (req, res) => {
    IO.set(res, req.body)
  })
}

const exampleSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "Example Schema",
  description: "Schema for creating examples",
  type: "object",
  properties: {
    name: {
      type: "string",
    },
  },
  additionalProperties: false,
  required: ["name"],
};

const requestIO = new IO({ reqBodySchema: exampleSchema });

router.post("/",
  requestIO.processRequest(),
  handleBusinessLogic(),
  requestIO.sendResponse(),
)

app.use(
  `/name`,
  router
);


app.use(errorMiddleware());

const serverlessApp = serverless(app);

module.exports.serverlessApp = serverlessApp;