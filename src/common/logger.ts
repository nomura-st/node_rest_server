import { getLogger, configure } from "log4js";

// 設定
configure("config/log.json");
export const logger = getLogger();
