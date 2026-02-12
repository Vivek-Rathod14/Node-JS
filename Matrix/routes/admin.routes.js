const express = require("express");
const { addAdminPage, addAdmin, addView } = require("../controller/admin.controller");
const routes = express.Router();
routes.get("/add-admin", addAdminPage)
routes.post("/add-admin", addAdmin)
routes.get("/view-Admin", addView)

module.exports = routes;