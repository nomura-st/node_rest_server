import { RequestHandler } from "express";
import { check, oneOf, matchedData, ValidationChain } from "express-validator";
import { Prisma } from "../../../prisma/generated/db/index.js";
import { prisma } from "../../db/client.js";
import { logger } from "../../common/logger.js";

/**
 * 登録用バリデーションルール
 */
export const insertChecks = [
  // 日付は必須
  check("datetime").isAlphanumeric().exists(),
  // 位置、またはコメントは必須
  oneOf([
    [check("lat").exists(), check("lng").exists()],
    check("comment").exists(),
  ]),
] as ValidationChain[];

/**
 * 登録
 * @param req
 * @param res
 */
export const insert: RequestHandler = async (req, res) => {
  const request = matchedData(req) as Prisma.MarkerCreateInput;

  // 登録データ準備
  const createInput = {
    data: {
      ...request,
    },
  };
  if (request.comment) {
    // コメント有りの場合はコメントも追加
    createInput.data.comment = {
      create: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        comment: request.comment as any,
      },
    };
  }

  // 登録
  const created = await prisma.marker.create(createInput);

  // 後処理
  const createdJSON = JSON.stringify(created);
  logger.debug(`Marker created (${createdJSON})`);
  res.json(createdJSON);
};
