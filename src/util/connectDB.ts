import { mongoose } from "@typegoose/typegoose";

export async function connectDB() {
  const db = await mongoose.connect(
    "mongodb+srv://mongo:123...%40bcD.@cluster0.nsrarlo.mongodb.net/myDele"
  );
  console.log("database is connected", db.connection.db.databaseName);
  const conn = db.connection.db.databaseName;
  return conn;
}
