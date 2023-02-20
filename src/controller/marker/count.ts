import { RequestHandler } from "express";

export const count: RequestHandler = (req, res, next) => {
  res.json(10);
};
