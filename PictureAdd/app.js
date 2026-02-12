const express = require("express");
const app = express();
const dbconnect = require("./config/dbconnect");
const Picture = require("./model/picture.model");
const upload = require("./middleware/multer")
app.use("/uploads", express.static("uploads"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const fs = require("fs");
const path = require("path");

dbconnect();


app.get("/", async (req, res) => {
    const pics = await Picture.find();
    res.render("index", { pic: pics });
});

app.post("/picdata", upload.single("img"), async (req, res) => {
    let imgpath = req.file ? req.file.filename : "";

    let data = await Picture.create({
        ...req.body,
        img: imgpath
    })
    console.log(data);
    return res.redirect("/");
}) 
app.get("/delete/:id", async (req, res) => {
    try {
        const picid = await Picture.findById(req.params.id);

        if (picid && picid.img) {
            const imgPath = path.join(__dirname, "uploads", picid.img);

            if (fs.existsSync(imgPath)) {
                fs.unlinkSync(imgPath); 
            }
        }

        await Picture.findByIdAndDelete(req.params.id);
        return res.redirect("/");
    } catch (error) {
        console.log(error);
        return res.redirect("/");
    }
});

app.listen(3000, () => {
    console.log("server is running localhost:3000");
});
