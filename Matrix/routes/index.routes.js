const express =require("express");
const { login, dashboard } = require("../controller/index.controller");
const routes = express.Router();
routes.get("/",login)
routes.get("/dashboard",dashboard)
routes.use("/admin",require("./admin.routes"))
module.exports = routes;