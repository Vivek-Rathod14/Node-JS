const express = require("express");
const routes = express.Router();
const { subcategoreyAddPage, subcategoreyAdd ,subcategoreyViewPage,subcategoreyDelete, subcategoreyEdit, subcategoreyEditPage} = require("../controller/subcategorey.controller");
const passport = require("passport");
routes.get("/subcategoreyAddPage", passport.checkAuthenticate, subcategoreyAddPage)
routes.post("/subcategoreyAdd",upload.single("img"), subcategoreyAdd)
routes.get("/subcategoreyViewPage", passport.checkAuthenticate,upload.single("img"), subcategoreyViewPage)
routes.get("/subcategoreyDelete/:id", subcategoreyDelete)
routes.get("/subcategoreyEdit/:id", passport.checkAuthenticate, subcategoreyEditPage)
routes.post("/subcategoreyEdit/:id", subcategoreyEdit)
module.exports = routes