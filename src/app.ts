import express from "express";
import path from "path";
import { connectDB } from "./util/connectDB";
import * as dotenv from "dotenv";
import { loadApiEndpoints } from "./controllers/api";

// Create Express server
const app = express();
dotenv.config();
// Express configuration
app.set("port", process.env.PORT );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

connectDB()


loadApiEndpoints(app);

export default app;
