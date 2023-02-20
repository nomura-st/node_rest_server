import { logger } from "../common/logger";
import { RequestHandler } from "express";

/**
 * アクセスログ出力
 */
export const accessLog: RequestHandler = (req, res, next) => {
  logger.debug(`${req.method} ${req.url}`);
  next();
};
