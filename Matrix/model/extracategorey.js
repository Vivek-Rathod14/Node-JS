const mongoose = require("mongoose")

const subcategoreySchema = mongoose.Schema({
    subcategoreyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategorey"
    },
    extracategorey: String
})
module.exports = mongoose.model("extracategorey",subcategoreySchema)