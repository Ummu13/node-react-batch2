require('dotenv').config()
const express = require("express");
const cors = require("cors");
const { router } = require("./src/routers/main");
const app = express();
const port = 3000;

var corsOption = {
  origin: process.env.CORS_ALLOW_LIST.split(","),
  optionsSuccessStatus: 200,
}

app.use(cors(corsOption));
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
