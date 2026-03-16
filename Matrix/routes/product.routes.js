const express = require("express");
const { productPage, subcategoreyData, extracategoreyData, productAdd, productViewPage } = require("../controller/product.controller");

const routes = express.Router();

routes.get("/productAddPage", productPage);
routes.get("/subcategorey/:id", subcategoreyData);
routes.get("/extracategorey/:id", extracategoreyData);

routes.post("/productAdd", productAdd);
routes.get("/productViewPage", productViewPage);


module.exports = routes;