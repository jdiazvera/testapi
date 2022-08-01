import { getModelForClass, prop } from "@typegoose/typegoose";

export class User {
  @prop({ required: true })
  login: string;

  @prop({ required: true })
  name: string;

  @prop({ required: true })
  email: string;

  @prop({ required: true })
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

  @prop({ required: true })
  bank_account: string;
}

export const userModel = getModelForClass(User);
