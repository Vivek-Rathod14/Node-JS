const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    skill: {
        type: String
    },
    mobile: {
        type: String
    },
})
module.exports = mongoose.model("Student", StudentSchema)