import { Service } from "typedi";

import { Category } from "../models/categoryModel";
import CategoriesRepository from "../repository/categoryRepository";
import { logger } from "../util/logger";

@Service()
export class CategoriesService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async insertCategory(document: Category) {
    const checkcategories = this.categoriesRepository.InsertCategory(document);
    logger.info("Checking categoriesService.insertCategory");
    return checkcategories;
  }
}
export default CategoriesService;
