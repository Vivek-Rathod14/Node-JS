const express = require("express");
const { UserData, UserDataDelete, UserDataGet } = require("../controller/index.controller");
const routes = express.Router();

routes.get("/api/User", UserDataGet);
routes.post("/api/User", UserData);
routes.delete("/User/:id", UserDataDelete);


module.exports = routes