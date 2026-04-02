const express = require('express');
const { register, login } = require('../auth/userAuth');
const upload = require("../middleware/multer")
const { verify } = require("../auth/verify");
const { taskForm, taskItem, taskList, taskDelete, taskUpdate } = require('../controller/admin.controller');

const route = express.Router();

route.post("/register", upload.single("image"), register)

route.post("/login", upload.single("image"), login)

// add task

route.post("/taskForm", verify("user"), taskForm)

route.get("/taskItem/:id", verify("user"), taskItem)

route.delete("/taskDelete/:id", verify("user"), taskDelete)

route.put("/taskUpdate/:id", verify("user"), taskUpdate)

route.get("/taskList", verify("user"), taskList)

module.exports = route;