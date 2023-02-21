import { RequestHandler } from "express";
import { prisma } from "../../db/client";

export const count: RequestHandler = async (req, res) => {
  const count = await prisma.marker.count();
  res.json(count);
};
