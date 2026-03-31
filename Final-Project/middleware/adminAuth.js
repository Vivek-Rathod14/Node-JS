const Admin = require("../model/admin")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
exports.registerAdmin = async (req, res) => {
    try {
        const { email, password } = req.body
        const img = req.file ? req.file.filename : null;
        console.log(email, password);


        const isAdminExists = await Admin.findOne({ email: req.body.email });
        if (isAdminExists) {
            return res.json({
                message: "User is Exists"
            })
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const AdminBase = await Admin.create({
            ...req.body,
            password: hashedPassword,
            image: img
        })

        res.json({
            message: "Admin Register Succesful",
            admin: {
                _id: AdminBase.id,
                firstname: AdminBase.firstname,
                lastname: AdminBase.lastname,
                email: AdminBase.email,
                postion: AdminBase.position,
                role: AdminBase.role
            }
        })
    } catch (error) {
        console.log(error);

    }
};
exports.loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.json({
                message: "user not found "
            })
        }
        const isPasswordValid = await bcrypt.compare(password, admin.password)

        if (!isPasswordValid) {
            return res.json({
                message: "Invalid password"
            })
        }
        const token = jwt.sign({
            id: admin._id,
            firstname: admin.firstname,
            postion: admin.position,
            email: admin.email,
            role: admin.role,
        }, process.env.JWT_SECRET);

        res.cookie("cookie", token);

        res.json({
            message: "Admin Login Succesful",
            admin: {
                _id: admin.id,
                email: admin.email,
                password: admin.password
            }
        })

    } catch (error) {
        console.log(error);
    }
}