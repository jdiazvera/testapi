import mongoose from "mongoose";

import { createApp } from "./app";
import { config } from "./util/config";

/**
 * Start Express server.
 */
mongoose
  .connect(config.mongo.url)
  .then(() => {
    const app = createApp();
    app.listen(app.get("port"), () => {
      console.log(
        "App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
      );
      console.log("  Press CTRL-C to stop\n");
    });
  })
  .catch((err) => {
    console.log(err);
  });
