import mongoose from "mongoose";
import request from "supertest";

import { createApp } from "../../src/app";
import { config } from "../../src/util/config";

describe("POST /user", () => {
  beforeAll((done) => {
    mongoose.connect(config.mongo.test, () => done());
  });
  afterAll((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done())
    })
  });

  const app = createApp();
  const inputCorrect = {
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
  const inputLogin = {
    name: "Ali Corrales",
    email: "alicorrales@gmail.com",
    password: "12345678",
    surname: true,
    addres: "601 NW 68 ST Virginia",
    postalcode: "555",
  };
  it("should return 201 if user is create", async () => {
    const response = await request(app).post("/user").send(inputCorrect);
    expect(response.status).toBe(201);
  });
  it("should return Login : acorrales exists if user is repeat", async () => {
    const response = await request(app).post("/user").send(inputCorrect);
    expect(response.text).toContain("exists");
  });
  it("should return Login is required", async () => {
    const response = await request(app).post("/user").send(inputLogin);
    expect(response.status).toBe(403);
  });
});
