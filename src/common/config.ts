import { logger } from "./logger.js";

export const initialize = (basepath: string | undefined) => {
  logger.info(`SYSTEM STARTING... (basepath:${basepath})`);
  logger.info(`SYSTEM STARTED!`);
};
