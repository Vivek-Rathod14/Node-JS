const express = require("express");
const { login } = require("../middleware/managerAuth");
const upload = require("../middleware/multer");
const { managerProfile, managerProfileUpdate, addEmployee, deleteEmployee, getAllEmployee, updateEmployee } = require("../controllers/manager.controller");
const { verify } = require("../middleware/verify");



const routes = express.Router();

// manager & login
routes.post("/login", login);

// manager profile
routes.get("/profile", verify("manager"), managerProfile);

routes.put("/profileUpdate", verify("manager"), managerProfileUpdate);

routes.post("/employee", upload.single("image"), verify("manager"), addEmployee);
routes.get("/employees", verify("manager"), getAllEmployee);
routes.delete("/deleteEmployee/:id", verify("manager"), deleteEmployee);
routes.put("/updateEmployee/:id", verify("manager"), updateEmployee);


module.exports = routes;