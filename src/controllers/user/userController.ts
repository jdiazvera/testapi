import { Request, Response } from "express";
import Container, { Service } from "typedi";
import validate, { validateOrReject } from "class-validator"
import { User } from "../../models/user";

import UserService from "../../services/userService";
import { ValidatorUser } from "../../util/classValidator";
import { logger } from "../../util/logger";
import { errors } from "@typegoose/typegoose";

@Service()
class UserController {
  constructor(private userService: UserService) { }
  async insertUser(req: Request, res: Response) {
    const insert = req.body ;
    // const instance = new ValidatorUser(insert);
    // console.log("Hola Mundo")
    //async function validation(instance: User) { 
     try {
      // await validateOrReject(instance);
      console.log("Validating")
      const resultInsert = await this.userService.insertUser(insert);
      
    //   logger.info(
    //     "UserController insertUser called with login: " + insert.login
    //   );
    //   if (resultInsert != null) {
        return res.status(201).json({ message: resultInsert + " errors"});
    //   } else {
    //     logger.warn("Problem to insert user: " + insert.login);
    //     return res
    //       .status(404)
    //       .json({ message: "User with login: " + insert.login + " exists" });


      
    } catch (errors) {
      return res.status(403).json({ message: errors });

    }
    }
  }


export default UserController;