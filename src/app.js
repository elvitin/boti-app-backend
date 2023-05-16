import express from "express";

import homeRoutes from "./routes/homeRoutes.js";
import personRoutes from "./routes/personRoutes.js";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/person", personRoutes);
  }
}

export default new App().app;
