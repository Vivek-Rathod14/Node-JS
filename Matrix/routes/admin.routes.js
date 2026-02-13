const express = require("express");
const { addAdminPage, addAdmin, addView, deleteAdmin, editAdminPage, Chnage } = require("../controller/admin.controller");
const upload = require("../middleware/multer");  
const routes = express.Router();
routes.get("/add-admin", addAdminPage)
routes.post("/add-admin", upload.single("img"), addAdmin)
routes.get("/view-Admin", addView)
routes.get("/delete/:id", deleteAdmin);
routes.get("/edit/:id", editAdminPage);

routes.post("/edit/:id", Chnage);


module.exports = routes;