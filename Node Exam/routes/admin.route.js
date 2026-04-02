const express = require('express');
const { register, login } = require('../auth/adminAuth');
const upload = require("../middleware/multer")
const { verify } = require("../auth/verify");
const { taskForm, taskList, taskItem, taskDelete, taskUpdate } = require('../controller/admin.controller');

const route = express.Router();
//register & login
route.post("/register", upload.single("image"), register)
route.post("/login", upload.single("image"), login)

// add task

route.post("/taskForm", verify("admin"), taskForm)

route.get("/taskItem/:id", verify("admin"), taskItem)

route.delete("/taskDelete/:id", verify("admin"), taskDelete)

route.put("/taskUpdate/:id", verify("admin"), taskUpdate)

route.get("/taskList", verify("admin"), taskList)

module.exports = route;