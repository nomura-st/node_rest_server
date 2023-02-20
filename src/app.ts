import express from "express";
import { initialize } from "./common/config";
import { accessLog } from "./controller/common";
import makerRouter from "./routes/marker";
const app = express();

initialize("./config");

// 共通
app.use(accessLog);

// 各URL
app.use("/marker", makerRouter);

// 待ち受け開始
app.listen(3000);
