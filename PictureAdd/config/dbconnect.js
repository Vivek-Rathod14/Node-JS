const mongoose = require("mongoose");
const dbconnect = async ()=>{
    mongoose.connect("mongodb+srv://vivek_rathod:trevorphilips7260@cluster0.imzhc0d.mongodb.net/pic")
    .then(()=>{
        console.log("dbconnect");
    })
    .catch((error)=>{console.log(error);
    })
}
module.exports = dbconnect;