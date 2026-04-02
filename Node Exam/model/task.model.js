const monogoose = require('mongoose');
const taskSchema = new monogoose.Schema({
    AdminBy: {
        type: monogoose.Schema.Types.ObjectId
    },
    task: {
        type: String
    },
    description: {
        type: String
    },
    role: {
        type: String,
    }
})

const taskModel = monogoose.model('task', taskSchema);
module.exports = taskModel;