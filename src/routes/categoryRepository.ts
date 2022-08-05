import express, { Application, Request, Response } from "express";
import { Container } from "typedi";

import CategoryController from "../controllers/categoryController";
import { logger } from "../util/logger";

export const categoryRoutes = (app: Application): void => {
  const categoryController = Container.get(CategoryController);

  app.use(express.json());

  app.post("/category", (req: Request, res: Response) => {
    const insert = categoryController.insertCategory(req, res);
    logger.info("Routes POST categoryController");
    console.log(insert);
  });
};
