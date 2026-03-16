const subcategorey = require("../model/subcategorey")
const extracategorey = require("../model/extracategorey")
const categorey = require("../model/categorey")

exports.extracategoreyAddPage = async (req, res) => {
    try {
        const categoreyData = await categorey.find()
        const subcategoreyData = await subcategorey.find()
        res.render("./extracategorey/extracategoreyAdd", { subcategoreyData, categoreyData })
    } catch (error) {
        return res.redirect("/")
    }
}
exports.extracategoreyViewPage = async (req, res) => {
    try {
        const extracategoreyData = await extracategorey.find().populate("subcategoreyId")
        res.render("./extracategorey/extracategoreyView", { extracategoreyData })
    } catch (error) {
        return res.redirect("/")
    }
}
exports.extrasubcategoreyAdd = async (req, res) => {
    try {

        const extraData = {
            extracategorey: req.body.extracategorey,
            subcategoreyId: req.body.subcategoreyId
        }

        console.log(req.body.subcategoreyId);

        await extracategorey.create(extraData)

        return res.redirect("/extracategorey/extracategoreyViewPage")

    } catch (error) {
        return res.redirect("/")
    }
}
exports.extracategoreyDelete = async (req, res) => {
    try {
        const extraId = req.params.id
        await extracategorey.findByIdAndDelete(extraId);
        return res.redirect("/extracategorey/extracategoreyViewPage")

    } catch (error) {
        return res.redirect("/")
    }
}
exports.extracategoreyEditPage = async (req, res) => {
    try {

        const extraId = req.params.id
        const editExtracategorey = await extracategorey.findById(extraId)
        res.render("extracategorey/extracategoreyEdit", { editExtracategorey })

    } catch (error) {
        return res.redirect("/")
    }
}
exports.extracategoreyEdit = async (req, res) => {
    try {

        const extraId = req.params.id
        const extraData = req.body
        const editExtracategorey = await extracategorey.findByIdAndUpdate(extraId, extraData)
        return res.redirect("/extracategorey/extracategoreyViewPage")


    } catch (error) {
        return res.redirect("/")
    }
}
exports.subcategoreyData = async (req,res) => {
    try {
        let id = req.params.id;

        let data = await subcategorey.find({ categoreyId: id });

        res.json({
            data
        });
    } catch (error) {
        return res.redirect("/")
    }
}