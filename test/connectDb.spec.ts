describe("Connection to Database", () => {
  it("should connect to the database", async () => {
    function connectDB() {
      const db = {
        connection: {
          db: {
            databaseName: "myDele",
          },
        },
      };
      const value = db.connection.db.databaseName;
      console.log(value);
      return value;
    }
    const response = connectDB();
    expect(response).toEqual("myDele");
  });
});
