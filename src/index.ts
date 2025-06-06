// src/index.ts
import express from "express";
import userRoutes from "./routes/user.routes";
import { AppDataSource } from "./data-source";

const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
  app.use("/api/users", userRoutes);
  app.listen(3000, () =>
    console.log("Server listening on http://localhost:3000")
  );
});
