import { connectDB } from "../src/util/connectDB";

describe("Connection to Database", () => {
  it("should connect to the database", async () => {
    await connectDB().then((response) => {
      expect(response).toEqual("myDele");
    });
  });
});
