import express from "express";
import "express-async-errors";
import { initialize } from "./common/config";
import { errorLog, accessLog } from "./controller/common";
import markerRouter from "./routes/marker";

const app = express();

// 共通
app.use(accessLog);

// 各URL
app.use("/marker", markerRouter);

// エラー
app.use(errorLog);

// 待ち受け開始
app.listen(3000, () => {
  // サーバ起動
  initialize("./config");
});
