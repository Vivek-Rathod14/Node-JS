const mongoose = require("mongoose")
const dbconnect= async(req,res)=>{
    await mongoose.connect("mongodb+srv://vivek_rathod:trevorphilips7260@cluster0.imzhc0d.mongodb.net/Matrix")
    .then(()=>{
        console.log("db connect");
    })
    .catch((eroor)=>{console.log(eroor);
    })
} 
module.exports = dbconnect