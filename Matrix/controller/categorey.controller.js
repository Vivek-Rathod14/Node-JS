const categorey = require("../model/categorey")
const path = require("path");
const fs = require("fs");
const subcategorey = require("../model/subcategorey");
const extracategorey = require("../model/extracategorey");
exports.categoreyAddPage = async (req, res) => {
    try {
        res.render("categorey/categoreyAdd")
    } catch (error) {
        res.redirect("/")
    }
}

exports.categoreyViewPage = async (req, res) => {
    try {
        const Categorey = await categorey.find();

        res.render("categorey/categoreyView", { Categorey })
    } catch (error) {
        res.redirect("/")
    }
}
exports.categoreyAdd = async (req, res) => {
    try {

        const data = {
            categorey: req.body.categorey,
            img: req.file ? req.file.filename : ""
        }
        await categorey.create(data)

        return res.redirect("/categorey/categoreyViewPage")

    } catch (error) {
        console.log(error)
        return res.redirect("/")
    }
}

exports.categoreyDelete = async (req, res) => {
    try {
        const categoreyData = await categorey.findById(req.params.id);

        if (categoreyData) {
            if (categoreyData.img) {
                const imgPath = path.join(__dirname, "../uploads", categoreyData.img);
                if (fs.existsSync(imgPath)) {
                    fs.unlinkSync(imgPath);
                }
            }

            await categorey.findByIdAndDelete(req.params.id);
            
            const subData = await subcategorey.find({ categoreyId: req.params.id });

            const subIds = subData.map(sub => sub._id);
            await subcategorey.deleteMany({ categoreyId: req.params.id });

            await extracategorey.deleteMany({ subcategoreyId: subIds })

            console.log("Deleted category:", categoreyData);
        }

        return res.redirect("/categorey/categoreyViewPage");

    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
};

exports.categoreyEditPage = async (req, res) => {
    try {
        const id = req.params.id;
        const Editcategorey = await categorey.findById(id);
        console.log(Editcategorey);
        res.render("categorey/categoreyEdit", { Editcategorey })

    } catch (error) {
        console.log(error)
        return res.redirect("/")
    }
}
exports.categoreyEdit = async (req, res) => {
    try {
        const id = req.params.id;
        const categoreyUpdate = req.body
        if (req.file) {
            categoreyUpdate.img = req.file.filename
        }
        console.log(id);
        await categorey.findByIdAndUpdate(id, categoreyUpdate);

        res.redirect("/categorey/categoreyViewPage")

    } catch (error) {
        console.log(error)
        return res.redirect("/")
    }
}
