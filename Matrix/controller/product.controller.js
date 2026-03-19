const categorey = require("../model/categorey");
const extracategorey = require("../model/extracategorey");
const subcategorey = require("../model/subcategorey");
const product = require("../model/product.model");
exports.productPage = async (req, res) => {
    try {
        const categoreyData = await categorey.find()
        await res.render("product/productAdd", { categoreyData })
    } catch (error) {
        return res.redirect("/");
    }
}
exports.subcategoreyData = async (req, res) => {
    try {
        const id = req.params.id
        const data = await subcategorey.find({ categoreyId: id })
        res.json({
            data
        })
    } catch (error) {
        return res.redirect("/");

    }
}

exports.extracategoreyData = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await extracategorey.find({ subcategoreyId: id })
        res.json({
            data
        })

    } catch (error) {
        return res.redirect("/");

    }
}
exports.productAdd = async (req, res) => {
    try {

        const categoryData = await categorey.findById(req.body.categorey);
        const subcategoreyData = await subcategorey.findById(req.body.subCategorey);
        const extracategoreyData = await extracategorey.findById(req.body.extraCategorey);

        await product.create({
            categoreyId: categoryData._id,
            subcategoreyId: subcategoreyData._id,
            extracategoreyId: extracategoreyData._id,

            categorey: categoryData.categorey,
            subcategorey: subcategoreyData.subcategorey,
            extracategorey: extracategoreyData.extracategorey,

            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price
        });

        res.redirect("/product/productViewPage");

    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
}
exports.productViewPage = async (req, res) => {
    try {
        const productData = await product.find().populate("categoreyId").populate("subcategoreyId").populate("extracategoreyId")
        res.render("product/productView", { productData })

    } catch (error) {

        console.log(error);
        return res.redirect("/");
    }
}
exports.viewProductDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const productData = await product.findByIdAndDelete(id);
        res.redirect("/product/productViewPage");

    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
}
exports.editProductPage = async (req, res) => {
    try {
        const id = req.params.id;
        const productData = await product.findById(id)
            .populate("categoreyId")
            .populate("subcategoreyId")
            .populate("extracategoreyId");
        const categoreyData = await categorey.find();
        const subcategoreyData = await subcategorey.find();
        const extracategoreyData = await extracategorey.find();
        res.render("product/productEdit", { productData, categoreyData,subcategoreyData,extracategoreyData })

    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
}
exports.productEdit = async (req, res) => {
    try {

        const id = req.params.id;

        const categoryData = await categorey.findById(req.body.categorey);
        const subcategoreyData = await subcategorey.findById(req.body.subCategorey);
        const extracategoreyData = await extracategorey.findById(req.body.extraCategorey);

        await product.findByIdAndUpdate(id, {

            categoreyId: categoryData._id,
            subcategoreyId: subcategoreyData._id,
            extracategoreyId: extracategoreyData._id,

            categorey: categoryData.categorey,
            subcategorey: subcategoreyData.subcategorey,
            extracategorey: extracategoreyData.extracategorey,

            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price

        });

        res.redirect("/product/productViewPage");

    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
}

exports.productEditsubcategorey = async (req, res) => {
    try {
        const id = req.params.id
        const data = await subcategorey.find({ categoreyId: id })
        res.json({
            data
        })
    } catch (error) {
        return res.redirect("/");

    }
}