import { info } from "console";
import { Request, Response } from "express";
import { Service } from "typedi";

import CategoriesService from "../services/categoryService";
import { logger } from "../util/logger";

@Service()
class CategoryController {
  constructor(private categoriesService: CategoriesService) {}

  async insertCategory(request: Request, response: Response) {
    const insert = request.body;
    const categoryinsert = await this.categoriesService.insertCategory(insert);
    logger.info("Sending Data from the Controller");
    if (categoryinsert) {
      return response.status(201).json({ categoryinsert });
    } else {
      return response
        .status(403)
        .json({ Error: "All the fields are required" });
    }
  }
}
export default CategoryController;
