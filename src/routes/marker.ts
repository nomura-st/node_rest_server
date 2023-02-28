import express from "express";
import { validate } from "../controller/common.js";
import * as count from "../controller/marker/count.js";
import * as write from "../controller/marker/write.js";
import * as read from "../controller/marker/read.js";
const router = express.Router();

// app.tsでこのrouterを設定したURL + 以下のURLに対して、コントローラを起動
router.post("/search", validate(read.searchChecks), read.searchMany);
router.get("/count", count.count);
router.get("/:id", validate(read.selectOneChecks), read.selectOne);

router.post("/", validate(write.insertChecks), write.insert);

export default router;
