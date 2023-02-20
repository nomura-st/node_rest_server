import { logger } from "./logger";

export const initialize = (basepath: string | undefined) => {
  logger.info(`SYSTEM STARTING... (basepath:${basepath})`);
  logger.info(`SYSTEM STARTED!`);
};
