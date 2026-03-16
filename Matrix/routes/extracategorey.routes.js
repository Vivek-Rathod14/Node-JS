const express =require("express");
const { extracategoreyAddPage,extrasubcategoreyAdd, extracategoreyViewPage ,extracategoreyDelete,extracategoreyEditPage,extracategoreyEdit,subcategoreyData} = require("../controller/extracategorey.controller");
const routes = express.Router()
routes.get("/extracategoreyAddPage",extracategoreyAddPage)
routes.get("/extracategoreyViewPage",extracategoreyViewPage)
routes.post("/extrasubcategoreyAdd",extrasubcategoreyAdd)
routes.get("/extracategoreyDelete/:id",extracategoreyDelete)
routes.get("/extracategoreyEdit/:id",extracategoreyEditPage)
routes.post("/extracategoreyEdit/:id",extracategoreyEdit)
routes.get("/subcategorey/:id", subcategoreyData);
module.exports = routes