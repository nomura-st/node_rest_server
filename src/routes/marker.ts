import express from "express";
import { validate } from "../controller/common.js";
import { count } from "../controller/marker/count.js";
import { insert, insertChecks } from "../controller/marker/write.js";
const router = express.Router();

// app.tsでこのrouterを設定したURL + 以下のURLに対して、コントローラを起動
router.post("/", validate(insertChecks), insert);
router.get("/count", count);

export default router;
