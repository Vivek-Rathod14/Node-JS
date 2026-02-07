const express = require("express");
const dbconnect = require("./config/dbconnect");
const Book = require("./model/bookModel");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

dbconnect();

app.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.render("index", { books });
    } catch (error) {
        console.log(error);
        res.render("index", { books: [] });
    }
});

app.post("/bookdata", async (req, res) => {
    await Book.create(req.body);
    console.log(req.body);
    return res.redirect("/");
});
app.get("/delete/:id", async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    return res.redirect("/");
});
app.get("/edit/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.render("edit", { book });
    } catch (error) {
        console.log(error);
        res.send("Edit page error");
    }
});
app.post("/edit/:id", async (req, res) => {
    try {
        await Book.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.send("Update error");
    }
});

app.listen(3000, () => {
    console.log("Server Start at http://localhost:3000");
});
