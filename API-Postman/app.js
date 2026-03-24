const express = require("express");
const dbconnect = require("./config/dbconnect");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbconnect();
app.use("/", require("./routes/index.routes"))
app.listen(8000, () => {
    console.log("Server start at http://localhost:8000");

})