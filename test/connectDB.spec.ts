//import { connectDB } from "../src/util/connectDB";
import { mongoose } from "@typegoose/typegoose";

//let bd;

//beforeAll(async () => {
//  db = await mongoose.connect(
//    "mongodb+srv://mongo:123...%40bcD.@cluster0.nsrarlo.mongodb.net/myDele"
//  );
//})

//describe("Connection to Database", () => {
//  it("should connect to the database", async () => {
//    expect(db.connection.db.databaseName).toEqual("myDele");
//  });
//});

describe("Connection to Database", () => {
  var db: any;
  var connection: any;
  
  beforeAll(async () => {
    connection = await mongoose.connect(
      "mongodb+srv://mongo:123...%40bcD.@cluster0.nsrarlo.mongodb.net/myDele"
    );
    //db = mongoose.connection;
  });
  
  afterAll(async () => {
    //await db.close();
    await connection.disconnect();
  });
  
  test("Should connect to the database", async () => {
    expect(connection.connection.db.databaseName).toEqual("myDele");
  })
});

