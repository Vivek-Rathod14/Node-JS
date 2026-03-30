// const nodemailer = require("nodemailer");
// const Admin = require("../model/admin");
// const { text } = require("express");
// const manager = require("../model/manager");

// exports.sendEmail = async (req, res) => {
//     try {
//         const { email, subject, message, passoword } = req.body;
//         const isEmailExits = await manager.findOne({ email: email });
//         if (isEmailExits) {
//             return res.status(400).json({ message: "Manager Already Exists" });
//         }


        
//         // AUTH goes HERE inside createTransport
       
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: "Server Error",
//             error: error.message
//         });
//     }
// }