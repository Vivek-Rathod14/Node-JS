const express = require("express")
const routes = express.Router()
const upload = require("../middleware/multer")

const {categoreyAddPage, categoreyAdd, categoreyViewPage,categoreyDelete,categoreyEditPage,categoreyEdit} = require("../controller/categorey.controller")
const passport = require("passport")

routes.get("/categoreyAddPage", passport.checkAuthenticate, categoreyAddPage)

routes.post("/categoreyAdd", upload.single("img"), categoreyAdd)

routes.get("/categoreyViewPage", passport.checkAuthenticate, categoreyViewPage)

routes.get("/categoreyDelete/:id", categoreyDelete)

routes.get("/categoreyEdit/:id", passport.checkAuthenticate, categoreyEditPage)
routes.post("/categoreyEdit/:id",upload.single("img"), categoreyEdit)

module.exports = routes