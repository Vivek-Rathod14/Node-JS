const mongoose = require("mongoose");
const ApiSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    img:String,
    email: String,
    passoword: String,
    mobile: String
})
module.exports = mongoose.model("Api", ApiSchema)