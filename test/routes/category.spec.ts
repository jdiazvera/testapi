import mongoose from "mongoose";
import request from "supertest";

import { createApp } from "../../src/app";
import { config } from "../../src/util/config";

describe("POST /category", () => {
  beforeAll((done) => {
    mongoose.connect(config.mongo.test, () => done());
  });
  afterAll((done) => {
    mongoose.connection.close(() => done());
  });

  const app = createApp();
  const inputCorrect = {
    name: "Test Category six",
    code: "frmgjenf35hasASv",
  };
  const fieldsMissing = {
    name: "test Category 99.0",
  };
  it("should return 201 if category is create", async () => {
    const response = await request(app).post("/category").send(inputCorrect);
    expect(response.status).toBe(201);
  });
  it("A category exists with the same code", async () => {
    const response = await request(app).post("/category").send(inputCorrect);
    expect(response.text).toContain("exists");
  });
});
