const User = require('../model/user.model');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body.email);

        const itUserExist = await User.findOne({ email: req.body.email });
        if (itUserExist) {
            return res.status(400).json({
                message: "User already exist"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const UserData = await User.create({
            ...req.body,
            email: req.body.email,
            password: hashPassword,
        })
        return res.json({
            message: "User register successfully",
            UserData
        })
    }
    catch (error) {
        console.log(error);

    }
}
exports.login = async (req, res) => {
    try {

        const { email, password } = req.body

        const UserFind = await User.findOne({ email: email });

        if (!UserFind) {
            return res.json({
                message: "User Not Found"
            })
        };
        const PassMatch = await bcrypt.compare(password, UserFind.password);
        if (!PassMatch) {
            return res.json({
                message: "Password is incorrect"
            })
        };

        const token = await jwt.sign({
            id: UserFind._id,
            role: UserFind.role
        }, process.env.JWT_SECRET)
        return res.json({
            message: "User is login",
            token
        })

    } catch (error) {
        console.log(error);
    }
}