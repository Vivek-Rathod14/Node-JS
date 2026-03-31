const mongoose = require("mongoose");
const manager = require("../model/manager")
const employeeSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "manager"
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    phoneNo: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    position: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    department: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
},
    {
        timeseries: true
    })
module.exports = mongoose.model("employee", employeeSchema)
