const express = require("express");
const { productPage, subcategoreyData, extracategoreyData, productAdd, productViewPage, viewProductDelete ,editProductPage, productEdit, productEditsubcategorey,} = require("../controller/product.controller");
const passport = require("passport");

const routes = express.Router();

routes.get("/productAddPage", passport.checkAuthenticate, productPage);
routes.get("/subcategorey/:id", subcategoreyData);
routes.get("/extracategorey/:id", extracategoreyData);

routes.post("/productAdd", productAdd);
routes.get("/productViewPage", passport.checkAuthenticate, productViewPage);
routes.get("/viewProductDelete/:id", viewProductDelete);
routes.get("/editProduct/:id", passport.checkAuthenticate, editProductPage);
routes.post("/productEdit/:id", productEdit);

routes.get("/productEditsubcategorey/:id", productEditsubcategorey);

module.exports = routes;