const serverless = require("serverless-http");
const express = require("express");
const axios = require("axios");

const app = express();

app.use(
  `/name`,
  async (req, res) => {
    try {
      const response = await axios.get('https://api.namefake.com/');
  
      res.json(response.data);
    } catch (err) {
      console.error(err.message);
    }
  }
);

app.use(
  `/`,
  (req, res) => {
    try {
      // const response = await axios.get('https://api.namefake.com/');
  
      res.send("radi default");
    } catch (err) {
      console.error(err.message);
    }
  }
);

const serverlessApp = serverless(app);

module.exports.serverlessApp = serverlessApp;