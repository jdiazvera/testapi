import { mongoose } from "@typegoose/typegoose";

import { config } from "./config";

export function connectMongo() {
  mongoose
    .connect(config.mongo.url)
    .then()
    .catch((error) => {
      console.log(error);
    });
}
