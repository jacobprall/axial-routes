import Router from "koa-router";

const router = new Router();

router.get("/api/v1/health", async (ctx, next) => {
  ctx.body = { message: "OK" };
  await next();
});

export { router };

