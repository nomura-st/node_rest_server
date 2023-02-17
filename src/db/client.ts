// ※注意:環境によって使用しないDBのClientを作らなくてもよいようにエラーを無視している
// @ts-ignore
import { PrismaClient } from "../../prisma/generated/db";
// @ts-ignore
import { PrismaClient as PrismaClientAppend } from "../../prisma/generated/db_append";
// @ts-ignore
import { PrismaClient as PrismaClient_DEBUG } from "../../prisma/dev/generated/db";
// @ts-ignore
import { PrismaClient as PrismaClientAppend_DEBUG } from "../../prisma/dev/generated/db_append";

// デフォルト
let cCLass1 = PrismaClient;
let cClass2 = PrismaClientAppend;

// 環境変数によって変更
if (process.env.DEBUG === "true") {
  // デバッグモード
  // ※注意:接続先DBが違うだけで、DBのschemaは変わらないという前提で型違いのエラーを無視
  // XXXX:DB固有の処理などがあると異常となりうるので、本番環境と同じ型をデフォルトで設定
  // @ts-ignore
  cCLass1 = PrismaClient_DEBUG;
  // @ts-ignore
  cClass2 = PrismaClientAppend_DEBUG;
}

export const prisma = new cCLass1();
export const prismaAppend = new cClass2();
