import { getModelForClass, prop } from "@typegoose/typegoose";

export class User {
  @prop()
  login: string;

  @prop()
  name: string;

  @prop()
  email: string;

  @prop()
  password: string;

  @prop()
  surname: boolean;

  @prop()
  addres: string;

  @prop()
  postalcode: number;

  @prop()
  location: string;

  @prop()
  state: string;

  @prop()
  phone: number;

  @prop()
  bank_account: string;
}

export const userModel = getModelForClass(User);
