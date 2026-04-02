const Admin = require('../model/admin.model');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body.email);

        const itAdminExist = await Admin.findOne({ email: req.body.email });
        
        if (itAdminExist) {
            return res.status(400).json({
                message: "Admin already exist"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const AdminData = await Admin.create({
            ...req.body,
            email: req.body.email,
            password: hashPassword,

        })
        return res.json({
            message: "Admin register successfully",
            AdminData
        })
    }
    catch (error) {
        console.log(error);

    }
}
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const AdminFind = await Admin.findOne({ email });

        if (!AdminFind) {
            return res.json({
                message: "Admin Not Found"
            });
        }

        const PassMatch = await bcrypt.compare(password, AdminFind.password);

        if (!PassMatch) {
            return res.json({
                message: "Password is incorrect"
            });
        }

        const token = jwt.sign({
            id: AdminFind._id,
            role: AdminFind.role  
        }, process.env.JWT_SECRET);

        return res.json({
            message: "Admin is login",
            token
        });

    } catch (error) {
        console.log(error);
    }
};