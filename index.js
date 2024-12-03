require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 8000;

const app = express();

app.use("/", (req, res) => {
  res.send("Health check");
});

app.listen(port, () => {
  console.log("Server running on port", port);
});

// hi
