const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI).then(
            console.log("db connect")
        ).catch(((error) => {
            console.log(error);

        }))

    } catch (error) {
        console.log(error);

    }
}
module.exports = dbconnect;