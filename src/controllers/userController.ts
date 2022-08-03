import { Request, Response } from "express";
import { Service } from "typedi";

import UserService from "../services/userService";
import { logger } from "../util/logger";

@Service()
class UserController {
  constructor(private userService: UserService) {}

  async insertUser(req: Request, res: Response) {
    const insert = req.body;
    if (insert.login) {
      if (insert === {}) {
        logger.warn("Problem to insert user: User Emtyed");
        return res
          .status(400)
          .json({ message: "Problem to insert user: User Emtyed" });
      } else {
        const resultInsert = await this.userService.insertUser(insert);
        logger.info(
          "UserController insertUser called with login: " + insert.login
        );
        if (resultInsert != null) {
          return res.status(201).json({ message: resultInsert });
        } else {
          logger.warn("Problem to insert user: " + insert.login);
          return res
            .status(404)
            .json({ message: "User with login: " + insert.login + " exists" });
        }
      }
    } else {
      return res
        .status(403)
        .json({ message: "Is requared to insert user property login" });
    }
  }
}

export default UserController;
