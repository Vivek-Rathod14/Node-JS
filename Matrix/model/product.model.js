const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    categorey: String,
    subcategorey: String,
    extracategorey: String,
    img: String,
    description: String,
    quantity: Number,
    price: Number, 
    categoreyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorey"
    },

    subcategoreyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategorey"
    },

    extracategoreyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "extracategorey"
    },

})
module.exports = mongoose.model("product", productSchema)