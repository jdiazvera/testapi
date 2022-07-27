import { connectDB } from "../src/util/connectDB";

describe("Connection to Database", () => {
    it("should connect to the database", async () => {
        const response = await connectDB()
        expect(response).toEqual("myDele")
    })
})
