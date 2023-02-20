import { RequestHandler } from "express";

export const count: RequestHandler = (req, res) => {
  res.json(10);
};
