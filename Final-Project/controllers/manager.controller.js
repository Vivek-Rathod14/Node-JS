const Manager = require("../model/manager");
const Employee = require("../model/employee");
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")
const path = require("path")
const fs = require("fs")
const jwt = require("jsonwebtoken")

exports.managerProfile = async (req, res) => {
    try {
        const manager = await Manager.findById(req.user.id).select("-password");

        if (!manager) {
            return res.status(404).json({ message: "Manager not found in DB" });
        }

        res.json(manager);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.managerProfileUpdate = async (req, res) => {
    try {

        const managerProfileUpdate = await Manager.findByIdAndUpdate(req.user.id, req.body,
            { returnDocument: 'after' })


        return res.json({
            message: "manager profile updated",
            managerProfileUpdate
        })


    } catch (error) {
        console.log(error);

    }
}
exports.managerProfileDelete = async (req, res) => {
    try {
        const deleteManager = await Manager.findByIdAndDelete(req.user.id)
        return res.json({
            message: "manager profile Deleted",
            deleteManager
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
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
        subject: "Your Employee Account Credentials",

        text: `
            Hello ${firstname},

            Welcome! Your manager account has been created successfully.

            Login Credentials:
            ------------------
            Email: ${email}
            Password: ${password} 

            Please login and change your password immediately for security reasons.

            Login Link: http://localhost:8000/api/employee/login

            Best Regards,

            Manager Team
    `
    };
    transporter.sendMail(mailOptions);

}

exports.addEmployee = async (req, res) => {
    try {
        const img = req.file
        console.log(img);
        const isEmailExits = await Employee.findOne({ email: req.body.email })
        if (isEmailExits) {
            return res.json({
                message: "Employee Alrey Exits"
            })
        }
        const hashPassword = await bcrypt.hash(req.body.password, 10)

        const EmployeeAdd = await Employee.create({
            ...req.body,
            image: img.filename,
            password: hashPassword,
            createdBy: req.user.id
        })
        // console.log(req.user);


        sendMail(req.body.email, req.body.firstname, req.body.password)

        res.json({
            message: "Employee Add",
            EmployeeAdd,
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}

exports.deleteEmployee = async (req, res) => {
    try {

        const employee = await Employee.findById(req.params.id);

        if (employee.createdBy == req.user.id) {
            const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
            res.json({
                message: "Employee delete",
                deleteEmployee,
            })
        }
        else {
            return res.json({
                message: "Only manager can delete this employee"
            })
        }
        console.log(employee);

        if (employee && employee.image) {
            imgPath = path.join(__dirname, "../uploads", employee.image)
            if (fs.existsSync(imgPath)) {
                fs.unlinkSync(imgPath)
            }
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
exports.getAllEmployee = async (req, res) => {
    try {

        const getAllEmployee = await Employee.find({ createdby: req.user.id })

        res.json({
            message: "getAllEmployee",
            getAllEmployee,
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
exports.updateEmployee = async (req, res) => {
    try {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        const updateEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" })

        res.json({
            message: "update empoloyee",
            updateEmployee,
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
