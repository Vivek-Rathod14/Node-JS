const express = require("express");
const dbconnect = require("../config/dbconnect");
const app = express();
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser())
dbconnect()
app.use("/api", require("../routes/index.routes"))

module.exports = app;