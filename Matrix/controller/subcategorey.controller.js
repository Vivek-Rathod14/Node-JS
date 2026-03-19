
const categorey = require("../model/categorey");
const extracategorey = require("../model/extracategorey");
const subcategorey = require("../model/subcategorey")

exports.subcategoreyAddPage = async (req, res) => {
    try {
        const categoreyData = await categorey.find()
        res.render("./subcategorey/subcategoreyAdd", { categoreyData });
    } catch (error) {
        res.redirect("/")
    }
}
exports.subcategoreyViewPage = async (req, res) => {
    try {

        const subcategoreyData = await subcategorey
            .find()
            .populate("categoreyId")

        console.log(subcategoreyData);

        res.render("./subcategorey/subcategoreyView", { subcategoreyData });

    } catch (error) {
        console.log(error);
        res.redirect("/")
    }
}
exports.subcategoreyAdd = async (req, res) => {
    try {

        console.log(req.body);

        const subcategoreyData = {
            subcategorey: req.body.subcategorey,
            categoreyId: req.body.categoreyId
        }

        console.log(subcategoreyData);

        await subcategorey.create(subcategoreyData);

        return res.redirect("/subcategorey/subcategoreyViewPage");

    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
}
exports.subcategoreyDelete = async (req, res) => {
    try {
        const subId = req.params.id;
        console.log(subId);
        await subcategorey.findByIdAndDelete(subId);
        // await subcategorey.deleteMany({ categoreyId: req.params.id });

        await extracategorey.deleteMany({subcategorey: subId})
        return res.redirect("/subcategorey/subcategoreyViewPage");


    } catch (error) {
        return res.redirect("/")
    }
}
exports.subcategoreyEditPage = async (req, res) => {
    try {
        const subId = req.params.id;
        const editSubcategorey = await subcategorey.findById(subId)
        res.render("subcategorey/subcategoreyEdit", { editSubcategorey })

    } catch (error) {
        return res.redirect("/")
    }
}

exports.subcategoreyEdit = async (req, res) => {
    try {
        const subId = req.params.id;
        const editSubcategorey = req.body
        await subcategorey.findByIdAndUpdate(subId, editSubcategorey)

        res.redirect("/subcategorey/subcategoreyViewPage")

    } catch (error) {
        return res.redirect("/")
    }
}