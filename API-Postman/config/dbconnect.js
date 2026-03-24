const mongoose = require("mongoose")
const dbconnect = async () => {
    await mongoose.connect(("mongodb+srv://vivek_rathod:trevorphilips7260@cluster0.imzhc0d.mongodb.net/API-Postman"))
        .then(() => {
            console.log("dbconnect");
        })
        .catch((error) => {
            console.log(error);

        })
}
module.exports = dbconnect;