const mongoose = require("mongoose");

const dbconnect = () => {
    mongoose.connect("mongodb://localhost:27017/Student-Card")
        .then(() => console.log("db is connet"))
        .catch((err) => console.log(err));
}
module.exports = dbconnect;