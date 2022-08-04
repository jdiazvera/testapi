import { Request, Response } from "express";
import { Service } from "typedi";

import { User } from "../../models/user";
import UserService from "../../services/userService";
import { logger } from "../../util/logger";
import { ValidatorUser } from "./classValidator";

@Service()
class UserController {
  constructor(private userService: UserService) {}

  async insertUser(req: Request, res: Response) {
    const insert: User = req.body;

    const instance = new ValidatorUser(insert);
    const validate = await instance.validation(instance);
    if (validate === true) {
      const resultInsert = await this.userService.insertUser(insert);
      logger.info(
        "UserController insertUser called with login: " + insert.login
      );
      return res.status(201).json({ message: resultInsert });
    } else {
      const extract = JSON.stringify(validate);
      const changes = JSON.parse(extract);
      console.log(changes);
      logger.warn(
        "Problem to insert user, the problem is properties incomplete " +
          extract
      );
      return res.status(403).json(changes);
    }
  }
}

export default UserController;
