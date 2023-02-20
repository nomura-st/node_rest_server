import express from "express";
import { accessLog } from "./controller/common";
import makerRouter from "./routes/marker";
const app = express();

// 共通
app.use(accessLog);

// 各URL
app.use("/marker", makerRouter);
console.log("START!");

// 待ち受け開始
app.listen(3000);
