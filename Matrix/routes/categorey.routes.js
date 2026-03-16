const express = require("express")
const routes = express.Router()
const upload = require("../middleware/multer")

const {categoreyAddPage, categoreyAdd, categoreyViewPage,categoreyDelete,categoreyEditPage,categoreyEdit} = require("../controller/categorey.controller")

routes.get("/categoreyAddPage", categoreyAddPage)

routes.post("/categoreyAdd", upload.single("img"), categoreyAdd)

routes.get("/categoreyViewPage", categoreyViewPage)

routes.get("/categoreyDelete/:id", categoreyDelete)

routes.get("/categoreyEdit/:id", categoreyEditPage)
routes.post("/categoreyEdit/:id",upload.single("img"), categoreyEdit)

module.exports = routes