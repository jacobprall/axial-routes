"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_json_1 = __importDefault(require("koa-json"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_static_1 = __importDefault(require("koa-static"));
const utils_1 = __importDefault(require("./utils"));
const app = new koa_1.default();
const router = new koa_router_1.default();
router.get("/api/v1/health", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = { message: "OK" };
    yield next();
}));
router.get("/api/v1/convert/:number", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { number } = ctx.params;
    const result = (0, utils_1.default)(number);
    ctx.body = { result };
    yield next();
}));
// Middleware
app.use((0, koa_bodyparser_1.default)());
app.use((0, koa_json_1.default)());
app.use((0, koa_logger_1.default)());
// Routes
app.use((0, koa_static_1.default)("./public"));
app.use(router.routes()).use(router.allowedMethods());
exports.default = app;
