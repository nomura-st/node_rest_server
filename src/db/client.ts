import { strUtil } from "../util";
import { PrismaClient } from "../../prisma/generated/db";
import { PrismaClient as PrismaClientAppend } from "../../prisma/generated/db_append";
import { PrismaClient as PrismaClient_DEBUG } from "../../prisma/dev/generated/db";
import { PrismaClient as PrismaClientAppend_DEBUG } from "../../prisma/dev/generated/db_append";

// デフォルト
let cCLass1 = PrismaClient;
let cClass2 = PrismaClientAppend;

// 環境変数によって変更
if (strUtil.isTrue(process.env.DEBUG)) {
  // デバッグモード
  console.log("デバッグ用DBで実行");
  // ※注意:接続先DBが違うだけで、DBのschemaは(それほど)変わらないという前提で型違いのエラーを無視
  // XXXX:DB固有の処理などがあると異常となりうる
  // @ts-ignore
  cCLass1 = PrismaClient_DEBUG;
  // @ts-ignore
  cClass2 = PrismaClientAppend_DEBUG;
}

// シングルトンのインスタンスとなる
export const prisma = new cCLass1();
export const prismaAppend = new cClass2();
