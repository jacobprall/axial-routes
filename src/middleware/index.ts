import bodyParser from "koa-bodyparser";
import json from "koa-json";
import logger from "koa-logger";

export function addMiddleware(app) {
  app.use(bodyParser());
  app.use(json());
  app.use(logger());
}
