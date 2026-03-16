const express = require("express");
const routes = express.Router();
const { subcategoreyAddPage, subcategoreyAdd ,subcategoreyViewPage,subcategoreyDelete, subcategoreyEdit, subcategoreyEditPage} = require("../controller/subcategorey.controller");
routes.get("/subcategoreyAddPage", subcategoreyAddPage)
routes.post("/subcategoreyAdd",upload.single("img"), subcategoreyAdd)
routes.get("/subcategoreyViewPage",upload.single("img"), subcategoreyViewPage)
routes.get("/subcategoreyDelete/:id", subcategoreyDelete)
routes.get("/subcategoreyEdit/:id", subcategoreyEditPage)
routes.post("/subcategoreyEdit/:id", subcategoreyEdit)
module.exports = routes