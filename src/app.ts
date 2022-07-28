import express from "express";
import { connectDB } from "./util/connectDB";
import { loadApiEndpoints } from "./controllers/api";
import path from "path";

// Create Express server
const app = express();
// Express configuration
app.set("port", 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

connectDB();

loadApiEndpoints(app);

export default app;
