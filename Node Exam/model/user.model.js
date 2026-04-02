const monogoose = require('mongoose');
const Admin = require("./admin.model")
const userSchema = new monogoose.Schema({
    AdminBy: {
        type: monogoose.Schema.Types.ObjectId,
        ref: "Admin"
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    phoneNo: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
})

const userModel = monogoose.model('user', userSchema);
module.exports = userModel;