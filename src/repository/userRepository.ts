import { Service } from "typedi";

import { User, userModel } from "../models/user";
import { logger } from "../util/logger";

@Service()
class UserRepository {
  async insert(documents: User) {
    const login = documents.login;
    const previous = await userModel.find({ login: login });
    if (previous.length == 0) {
      const insertUser = await userModel.insertMany(documents);
      logger.info("User insert: " + login);
      return insertUser;
    } else {
      logger.warn("User insert failed: " + login);
      return { message: "Login : " + login + " exists" };
    }
  }
}

export default UserRepository;
