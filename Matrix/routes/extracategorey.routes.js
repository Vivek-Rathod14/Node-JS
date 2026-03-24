const express =require("express");
const { extracategoreyAddPage,extrasubcategoreyAdd, extracategoreyViewPage ,extracategoreyDelete,extracategoreyEditPage,extracategoreyEdit,subcategoreyData} = require("../controller/extracategorey.controller");
const passport = require("passport");
const routes = express.Router()
routes.get("/extracategoreyAddPage", passport.checkAuthenticate,extracategoreyAddPage)
routes.get("/extracategoreyViewPage", passport.checkAuthenticate,extracategoreyViewPage)
routes.post("/extrasubcategoreyAdd",extrasubcategoreyAdd)
routes.get("/extracategoreyDelete/:id",extracategoreyDelete)
routes.get("/extracategoreyEdit/:id", passport.checkAuthenticate,extracategoreyEditPage)
routes.post("/extracategoreyEdit/:id",extracategoreyEdit)
routes.get("/subcategorey/:id", subcategoreyData);
module.exports = routes