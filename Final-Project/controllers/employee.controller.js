const Employee = require("../model/employee");

exports.profile = async (req, res) => {
    try {
        const employee = await Employee.findById(req.user.id).select("-password");
        if (!employee) {
            return res.status(404).json({ message: "Manager not found in DB" });
        }
        res.json(employee);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
exports.employeeProfileUpdate = async (req, res) => {
    try {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        const employeeProfileUpdate = await Employee.findByIdAndUpdate(req.user.id, req.body,
            { returnDocument: 'after' })
        return res.json({
            message: "employee profile updated",
            employeeProfileUpdate
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}
exports.AllEmployee = async (req, res) => {
    try {

        const AllEmployee = await Employee.find()
        return res.json({
            message: "All employee",
            AllEmployee
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}