import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express";
// async関数のrouterでerror時のnext関数応答を自動で行う
import "express-async-errors";
// 基本処理
import { errorLog, accessLog, validate } from "./controller/common.js";
import * as count from "./controller/marker/count.js";
import * as select from "./controller/marker/select.js";
import * as search from "./controller/marker/searchMany.js";
import * as write from "./controller/marker/write.js";

const app = express();

// 共通
// 静的ファイル(publicフォルダ配下を http://xxxx/public/.... として公開する)
app.use("/public", express.static(__dirname + "/../public"));

// POST送信されたJSONデータを読み取る
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(accessLog);

// 各URL
// 検索系
app.post("/marker/search", validate(search.validations), search.handler);
app.get("/marker/count", count.handler);
app.get("/marker/:id", validate(select.validations), select.handler);
// 更新系
app.post("/marker/create", validate(write.validations), write.handler);

// エラー
app.use(errorLog);

export default app;
