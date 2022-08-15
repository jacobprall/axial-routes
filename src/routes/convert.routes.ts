import Router from "koa-router";
import * as ConvertController from "../controllers/convert.controllers";

const router = new Router();

router.get("/api/v1/convert/:number", ConvertController.getConversion);

export { router }