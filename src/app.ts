import Koa from "koa";
import { addMiddleware } from "./middleware";
import { router as HealthRouter } from "./routes/health.routes";
import { router as ConvertRouter } from "./routes/health.routes";
import serve from "koa-static";

const app = new Koa();

// Middleware
addMiddleware(app);

// Routes
app.use(serve("./public"));
app.use(HealthRouter.routes()).use(HealthRouter.allowedMethods());
app.use(ConvertRouter.routes());

export default app;
