import express from "express";
import { count } from "../controller/marker/count";
const router = express.Router();

// routerに関わらず、アクセス日時を出力するミドルウェア
router.use((req, res, next) => {
  console.log(`MARKER COMMON`);
  next();
});

// app.tsでこのrouterを設定したURL + /countに対して、コントローラを起動
router.get("/count", count);

export default router;
