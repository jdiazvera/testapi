import { mongoose } from "@typegoose/typegoose";

export function connectDB() {
  const db = mongoose.connect(
    "mongodb+srv://mongo:123...%40bcD.@cluster0.nsrarlo.mongodb.net/myDele"
  );
  return db;
}
