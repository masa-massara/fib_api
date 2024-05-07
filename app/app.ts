import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { calculate_fibonacci } from "./fibonacci";
import { queryCheck } from "./queryCheck";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.get("/sample.com/fib", (request: Request, response: Response) => {
  try {
    queryCheck(request.query.n);
    const answer = calculate_fibonacci(Number(request.query.n));
    response.status(200).json(answer);
  } catch (error: any) {
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
    console.error(
      `PORT${PORT}でのサーバーの立ち上げに失敗しました: ${error.message}`
    );
  });
