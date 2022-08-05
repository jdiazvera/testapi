import { getModelForClass, prop } from "@typegoose/typegoose";

export class Category {
  @prop({ required: true })
  name: string;
  @prop({ required: true, unique: true })
  code: string;
}
export const categoryModel = getModelForClass(Category);
