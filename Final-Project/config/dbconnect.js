const mongoose = require("mongoose");
const dbconnect = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("db Connect");
        })
        .catch((error) => {
            console.log(error);
        })
}
module.exports =dbconnect