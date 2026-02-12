const mongoose = require("mongoose");
const PictureSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        img: {
            type: String,
        },
    }
)
module.exports = mongoose.model("Picture", PictureSchema);
