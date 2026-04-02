const taskModel = require("../model/task.model")
const path = require("path")
const fs = require("fs")
exports.taskForm = async (req, res) => {
    try {

        const taskForm = await taskModel.create({
            ...req.body,
            AdminBy: req.user.id,
            role: req.user.role

        });
        return res.json({
            message: "Task Added",
            taskForm
        });

    } catch (error) {
        console.log(error);
    }
};
exports.taskList = async (req, res) => {
    try {

        const taskList = await taskModel.find({
        });

        return res.json({
            message: "Task List",
            taskList
        });

    } catch (error) {
        console.log(error);
    }
};
exports.taskItem = async (req, res) => {
    try {
        const taskItem = await taskModel.findById(req.params.id)
        return res.json({
            message: "task Item",
            taskItem
        })

    } catch (error) {
        console.log(error);
    }

}
exports.taskDelete = async (req, res) => {
    try {
        const task = await taskModel.findById(req.params.id);
        if (!task) {
            return res.json({ message: "Task not found" });
        }
        if (task.createdBy.toString() !== req.user.id) {
            return res.json({ message: "Unauthorized" });
        }

        if (task.image) {
            const imgPath = path.join(__dirname, "../uploads", task.image);

            if (fs.existsSync(imgPath)) {
                fs.unlinkSync(imgPath);
            }
        }

        const taskDelete = await taskModel.findByIdAndDelete(req.params.id)

        return res.json({
            message: "task delete",
            taskDelete
        })

    } catch (error) {
        console.log(error);
    }
}
exports.taskUpdate = async (req, res) => {
    try {
        const taskUpdate = await taskModel.findByIdAndUpdate(req.params.id)
        return res.json({
            message: "task Update",
            taskUpdate
        })

    } catch (error) {
        console.log(error);
    }
}
