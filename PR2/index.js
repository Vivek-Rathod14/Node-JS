const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

let todos = [];

app.get("/", (req, res) => {
  res.render("inbox", { todos });
});

app.post("/add", (req, res) => {
  const { title, description } = req.body;
  if (title) {
    todos.push({
      id: Date.now(),
      title,
      description
    });
  }
  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  todos = todos.filter(todo => todo.id.toString() !== id);
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find(t => t.id.toString() === id);
  if (!todo) return res.redirect("/");
  res.render("edit", { todo });
});

app.post("/edit/:id", (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  const todo = todos.find(t => t.id.toString() === id);
  if (todo) {
    todo.title = title;
    todo.description = description;
  }
  res.redirect("/");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
