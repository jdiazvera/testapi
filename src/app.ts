import express, { Application } from "express";
import path from "path";

import { loadApiEndpoints } from "./controllers/api";
import { userRoutes } from "./routes/userRoutes";

export const createApp = (): Application => {
  const app = express();
  app.set("port", process.env.PORT || 3000);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
  );
  loadApiEndpoints(app);
  userRoutes(app);
  return app;
};
