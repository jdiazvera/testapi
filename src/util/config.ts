import dotenv from "dotenv";

dotenv.config();

const MONGO_URL =
  "mongodb+srv://mongo:123...%40bcD.@cluster0.nsrarlo.mongodb.net/myDele";
const TEST_DB =
  "mongodb+srv://mongo:123...%40bcD.@cluster0.nsrarlo.mongodb.net/myDele";

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 3000;

export const config = {
  mongo: {
    url: MONGO_URL,
    test: TEST_DB,
  },
  server: {
    SERVER_PORT,
  },
};
