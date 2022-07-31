import mongoose from "mongoose";
import request from "supertest";

import { createApp } from "../src/app";
import { config } from "../src/util/config";

describe("GET /api", () => {
  beforeAll((done) => {
    mongoose.connect(config.mongo.test, () => done());
  });
  afterAll((done) => {
    mongoose.connection.close(() => done());
  });

  const app = createApp();
  it("should return 200 OK", async () => {
    return request(app).get("/api").expect(200);
  });
});
