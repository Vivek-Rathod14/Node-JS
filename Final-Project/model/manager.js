const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const admin = require("../model/admin")

const managerSchema = new mongoose.Schema({

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin"
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
    },
    role: {
        type: String,
    },
},
    {
        timeseries: true
    })

module.exports = mongoose.model("manager", managerSchema)
