import { Service } from "typedi";

import { Category, categoryModel } from "../models/categoryModel";
import { logger } from "../util/logger";

@Service()
class CategoriesRepository {
  async InsertCategory(document: Category) {
    const search = await categoryModel.find({ code: document.code });
    if (search.length === 0) {
      const insertCategory = await categoryModel.insertMany(document);
      return insertCategory;
    } else {
      return { message: "this code already exists" + search.toString() };
    }
  }
}
export default CategoriesRepository;
