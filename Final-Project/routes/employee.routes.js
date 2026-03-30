const express = require("express");
const { profile ,employeeProfileUpdate,AllEmployee} = require("../controllers/employee.controller");
const { login } = require("../middleware/employeeAuth");
const { verify } = require("../middleware/verify");
const routes = express.Router();

routes.post("/login",login)
routes.get("/profile",verify("employee"),profile)
routes.get("/AllEmployee",verify("employee"),AllEmployee)
routes.put("/profileUpdate",verify("employee"),employeeProfileUpdate)
module.exports = routes;
