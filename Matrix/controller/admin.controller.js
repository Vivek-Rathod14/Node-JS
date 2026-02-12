const Admin = require("../model/admin.model"); // model import karo
exports.addAdminPage = async (req, res) => {
    try {
        res.render("admin/addAdmin");
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};
exports.addAdmin = async (req, res) => {
    try {
        const data = req.body;
        const newAdmin = await Admin.create(data);
        console.log("Admin Saved:", newAdmin);
        res.redirect("/admin/add-admin");  
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};
exports.addView = async (req, res) => {
    try {
       
        res.render("admin/viewAdmin")
        
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};