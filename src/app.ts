import express from "express";
// async関数のrouterでerror時のnext関数応答を自動で行う
import "express-async-errors";
// 基本処理
import { errorLog, accessLog } from "./controller/common.js";
// router
import markerRouter from "./routes/marker.js";

const app = express();

// 共通
app.use(accessLog);

// 各URL
app.use("/marker", markerRouter);

// エラー
app.use(errorLog);

export default app;
