const { sendEmail } = require("../middleware/nodemailer");
const Admin = require("../model/admin")
const Manager = require("../model/manager")
const Employee = require("../model/employee")
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const path = require("path")
const fs = require("fs")


exports.AlladminProfile = async (req, res) => {
    try {
        const AlladminProfile = await Admin.find();
        res.json({
            message: "All Admins",
            AlladminProfile
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
exports.adminProfile = async (req, res) => {
    try {
        const adminProfile = await Admin.findById(req.params.id);
        res.json({
            message: "All Admins",
            adminProfile
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
exports.adminProfileDelete = async (req, res) => {
    try {
        const adminProfileDelete = await Admin.findByIdAndDelete(req.params.id);
        res.json({
            message: "Admin Delete",
            adminProfileDelete
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
exports.adminProfileUpdate = async (req, res) => {
    try {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        const adminProfileUpdate = await Admin.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: 'after' }
        );

        res.json({
            message: "Admin Updated",
            adminProfileUpdate
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
// add manager

// email sent
const sendMail = (email, firstname, password) => {


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "rathodvivek5500@gmail.com",
            pass: "gutigitoilytessr"
        },
    });
    const mailOptions = {
        from: "rathodvivek5500@gmail.com",
        to: email,
        subject: "Your Manager Account Credentials",

        text: `
            Hello ${firstname},

            Welcome! Your manager account has been created successfully.

            Login Credentials:
            ------------------
            Email: ${email}
            Password: ${password} 

            Please login and change your password immediately for security reasons.

            Login Link: http://localhost:8000/api/manager/login

            Best Regards,

            Admin Team
    `
    };
    transporter.sendMail(mailOptions);

}

exports.addManager = async (req, res) => {
    try {
        const img = req.file
        console.log(img);
        const isEmailExits = await Manager.findOne({ email: req.body.email })
        if (isEmailExits) {
            return res.json({
                message: "Manager Already Exists"
            })
        }
        const hashPassword = await bcrypt.hash(req.body.password, 10)

        const ManagerAdd = await Manager.create({
            ...req.body,
            image: img.filename,
            password: hashPassword,
            createdBy: req.user.id
        })

        sendMail(req.body.email, req.body.firstname, req.body.password)

        res.json({
            message: "Manager Add",
            ManagerAdd,
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}

exports.getAllManager = async (req, res) => {
    try {
        const allManager = await Manager.find();
        res.json({
            message: "All Manager",
            allManager
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
exports.getManager = async (req, res) => {
    try {
        const getManager = await Manager.findById(req.params.id);
        res.json({
            message: " Manager",
            getManager
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
exports.deleteManager = async (req, res) => {
    try {

        const manager = await Manager.findById(req.params.id);
        console.log(manager.image);




        if (manager.createdBy.toString() == req.user.id) {
            const ManagerDelete = await Manager.findByIdAndDelete(req.params.id);
            res.json({
                message: "delete Manager",
                ManagerDelete,
            })
        }
        else {
            return res.json({
                message: "Only creator can delete this manager"
            })
        }
        
        if (manager && manager.image) {
            const imgPath = path.join(__dirname, "../uploads", manager.image)
            if (fs.existsSync(imgPath)) {
                fs.unlinkSync(imgPath);
            }
        }

        console.log(ManagerDelete);


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
exports.updateManager = async (req, res) => {
    try {
        const updateManager = await Manager.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" });
        res.json({
            message: "update  Manager",
            updateManager
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}

//get All Mmployees

exports.getAllEmployees = async (req, res) => {
    try {
        const getAllEmployees = await Employee.find();
        res.json({
            message: "Get All Employee",
            getAllEmployees
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}