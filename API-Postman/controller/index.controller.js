const Api = require("../model/Api");

exports.UserDataGet = async (req, res) => {
    try {
        const userData = await Api.find();
        res.json(userData)
        console.log(userData);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}
exports.UserData = async (req, res) => {
    try {
        const ApiData = req.body
        await Api.create(ApiData)
        res.json(ApiData)
        console.log(ApiData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

exports.UserDataDelete = async (req, res) => {
    try {
        const id = req.params.id;

        const deletedUser = await Api.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            message: "User deleted successfully",
            data: deletedUser
        });

        console.log(deletedUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};