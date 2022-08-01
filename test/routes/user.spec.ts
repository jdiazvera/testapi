import mongoose from "mongoose";
import request from "supertest";

import { createApp } from "../../src/app";
import { config } from "../../src/util/config";

describe("POST /user", () => {
  beforeAll((done) => {
    mongoose.connect(config.mongo.test, () => done());
  });
  afterAll((done) => {
    mongoose.connection.close(() => done());
  });

  const app = createApp();
  const input = {
    login: "acorrales",
    name: "Ali Corrales",
    email: "alicorrales@gmail.com",
    password: "12345678",
    surname: true,
    addres: "601 NW 68 ST Virginia",
    postalcode: "555",
    location: "West Virginia",
    state: "Florida",
    phone: 2567634329,
    bank_account: "KB242566",
  };
  it("should return 201 if user is create", async () => {
    const response = await request(app).post("/user").send(input);
    expect(response.status).toBe(201);
  });
});
