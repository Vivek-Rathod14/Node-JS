const express = require("express");
const { registerAdmin, loginAdmin } = require("../middleware/adminAuth");
const { adminProfile, AlladminProfile, adminProfileDelete, adminProfileUpdate, addManager, getAllManager, deleteManager, updateManager, getManager, getAllEmployees } = require("../controllers/admin.controller");
const upload = require("../middleware/multer");
const { verify } = require("../middleware/verify");
const routes = express.Router();
//register & login
routes.post("/register", upload.single("image"), registerAdmin);
routes.post("/login", loginAdmin);

// profile
routes.get("/AlladminProfile", AlladminProfile);
routes.get("/profile/:id", verify("admin"), adminProfile);
routes.delete("/deleteProfile/:id", verify("admin"), adminProfileDelete);
routes.put("/updateProfile/:id", verify("admin"), adminProfileUpdate);

// add manager

routes.post("/manager", upload.single("image"), verify("admin"), addManager);
routes.get("/managerss", verify("admin"), getAllManager);
routes.get("/managers/:id", verify("admin"), getManager);
routes.delete("/deleteManager/:id", verify("admin"),upload.single("image"), deleteManager);
routes.put("/updateManager/:id", verify("admin"),upload.single("image"), updateManager);


// view all employee 

routes.get("/employees", getAllEmployees)
module.exports = routes