const Manager = require("../model/manager")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const manager = await Manager.findOne({ email });

        if (!manager) {
            return res.json({
                message: "manager not found "
            })
        }
        const isPasswordValid = await bcrypt.compare(password, manager.password)


        if (!isPasswordValid) {
            return res.json({
                message: "Invalid password"
            })
        }

        const token = jwt.sign({
            id: manager._id,
            firstname: manager.firstname,
            lastname: manager.lastname,
            email: manager.email,
            role: manager.role,
        }, process.env.JWT_SECRET)
        res.cookie("cookie", token)

        res.json({
            message: "Manager Login Succesful",
            manager: {
                _id: manager.id,
                email: manager.email,
                password: manager.password
            },
            token
        })

    } catch (error) {
        console.log(error);
    }
}