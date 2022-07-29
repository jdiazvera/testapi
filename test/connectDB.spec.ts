import { connectDB } from "../src/util/connectDB";

describe("Connection to Database", () => {
  it("should connect to the database", async () => {
    const db = await connectDB();
    expect(db.connection.db.databaseName).toEqual("myDele");
    db.disconnect();
  });
});
