import express from "express";
import bodyParser from "body-parser";
import { errorMiddleware } from "@reactor4/forklift";

import someFeatureRouter from "../../someFeature";


const app = express();

app.use(bodyParser.json());

app.use(
    `/name`,
    someFeatureRouter
  );
  
app.use(errorMiddleware(false));


export default app;

