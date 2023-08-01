import express from "express";

const app = express();
const port = 2607;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
