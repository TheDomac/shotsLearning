import express from "express";
import { IO } from "@reactor4/forklift";

import { someFeatureController } from "./controllers"
import { someFeatureSchema } from "./schemas"

const someFeatureRouter = express.Router();
const controller = new someFeatureController();

const requestIO = new IO({ reqBodySchema: someFeatureSchema });

someFeatureRouter.post("/",
  requestIO.processRequest(),
  controller.postName(),
  requestIO.sendResponse(),
)

export default someFeatureRouter;
