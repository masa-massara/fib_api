"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const fibonacci_1 = require("./fibonacci");
const queryCheck_1 = require("./queryCheck");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
dotenv_1.default.config();
app.get("/sample.com/fib", (request, response) => {
    try {
        (0, queryCheck_1.queryCheck)(request.query.n);
        const answer = (0, fibonacci_1.calculate_fibonacci)(Number(request.query.n));
        response.status(200).json(answer);
    }
    catch (error) {
        const title = error.title || "不明なエラー";
        const message = error.message || "予期せぬエラーが発生しました";
        const statusCode = error.statusCode || 500;
        response.status(statusCode).json({ title, message, statusCode });
    }
});
app
    .listen(PORT, () => {
    console.log(`PORT${PORT}でサーバーを立ち上げました。`);
})
    .on("error", (error) => {
    console.error(`PORT${PORT}でのサーバーの立ち上げに失敗しました: ${error.message}`);
});
