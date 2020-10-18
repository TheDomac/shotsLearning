import serverless from "serverless-http";
import express from "express";
import axios from "axios";
import { errorMiddleware } from "@reactor4/forklift";
import bodyParser from "body-parser";
import basicAuth from "express-basic-auth";


import someFeatureRouter from "./someFeature";

const app = express();

app.use(basicAuth({
  users: { user: process.env.ACCESS_PASSWORD },
}))

app.use(bodyParser.json());


app.use(
  `/name`,
  someFeatureRouter
);


app.use(errorMiddleware());

export const serverlessApp = serverless(app);
