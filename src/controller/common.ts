import { RequestHandler } from "express";

/**
 * アクセスログ出力
 */
export const accessLog: RequestHandler = (req, res, next) => {
  console.log(`DATE=${new Date().toISOString()}`);
  next();
};
