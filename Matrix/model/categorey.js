const mongoose= require("mongoose");

const categorey = mongoose.Schema({
    categorey :String,
    img:String
})
module.exports = mongoose.model("categorey",categorey)