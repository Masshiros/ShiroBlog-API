import express from "express";
import userRouter from "./routes/user.routes.js";
import { config } from "dotenv";
config();
const app = express();
const port = process.env.DEV_APP_PORT;

// db connect
import database from "./dbs/init.mongodb.js";
// Routes
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
