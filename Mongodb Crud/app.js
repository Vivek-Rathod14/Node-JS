const express = require("express");
const app = express();
const dbconnect = require("./config/dataConnect");
const Student = require("./model/student.model");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

dbconnect();

// HOME → show all students
app.get("/", async (req, res) => {
  const students = await Student.find();
  res.render("index", { student: students });
});

// ADD student
app.post("/addData", async (req, res) => {
  await Student.create(req.body);
  res.redirect("/");
});

// DELETE student
app.get("/delete-data/:id", async (req, res) => {
  const id = req.params.id;
  await Student.findByIdAndDelete(id);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
