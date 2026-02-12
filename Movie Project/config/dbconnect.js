const mongoose = require("mongoose")
const dbconnect =  () => {
 
         mongoose.connect("mongodb+srv://vivek_rathod:trevorphilips7260@cluster0.imzhc0d.mongodb.net/moviestore")
            .then(() => {
                console.log("db Connect");

            })
            .catch((error) => {
                console.log(error);

            })
}
module.exports = dbconnect;