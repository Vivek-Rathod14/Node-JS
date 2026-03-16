const mongoose = require("mongoose")

const subcategoreySchema = mongoose.Schema({
    categoreyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorey"   
    },
    subcategorey: String
})

module.exports = mongoose.model("subcategorey", subcategoreySchema)