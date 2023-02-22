import { logger } from "../common/logger.js";
import { ErrorRequestHandler, RequestHandler } from "express";

/**
 * エラーログ出力
 */
// 第4引数までないとエラーハンドラとして認識されない
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorLog: ErrorRequestHandler = async (err, req, res, next) => {
  logger.error(err.stack);

  // エラーステータスがない場合
  if (err.status) res.status(err.status);
  if (!res.statusCode) res.status(500);
  res.json({ msg: err.message });
};

/**
 * アクセスログ出力
 */
export const accessLog: RequestHandler = (req, res, next) => {
  logger.debug(`${req.method} ${req.url}`);
  next();
};
