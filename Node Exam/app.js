require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const dbconnect = require('./config/dbconnect.js');
dbconnect();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require('./routes/index.route.js'));

app.listen(PORT, () => {
    console.log(`Server Start At localhost://${PORT}`);
})