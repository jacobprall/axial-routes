import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import json from "koa-json";
import logger from "koa-logger";
import serve from "koa-static";
import path from "path";
import convert from "./utils";

const app = new Koa();
const router = new Router();

router.get("/api/v1/health", async (ctx, next) => {
  ctx.body = { message: "OK" };
  await next();
});

router.get("/api/v1/convert/:number", async (ctx, next) => {
  const { number } = ctx.params;
  const result = convert(number);
  ctx.body = { result };
  await next();
});

// Middleware
app.use(bodyParser());
app.use(json());
app.use(logger());

// Routes
app.use(serve("./public"));
app.use(router.routes()).use(router.allowedMethods());

export default app;
