const Employee = require("../model/employee")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const employee = await Employee.findOne({ email });

        if (!employee) {
            return res.json({
                message: "employee not found "
            })
        }
        const isPasswordValid = await bcrypt.compare(password, employee.password)
        // const rightPassword = await Manager.findOne({ password: req.body.password }  )


        if (!isPasswordValid) {
            return res.json({
                message: "Invalid password"
            })
        }

        const token = jwt.sign({
            id: employee._id,
            firstname: employee.firstname,
            lastname: employee.lastname,
            email: employee.email,
            role: employee.role,
        }, process.env.JWT_SECRET)
        res.cookie("cookie", token)

        res.json({
            message: "Employee Login Succesful",
            employee: {
                _id: employee.id,
                email: employee.email,
                password: employee.password
            },
            token
        })

    } catch (error) {
        console.log(error);
    }
}