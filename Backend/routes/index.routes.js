const express = require("express")
const controller = require("../controller/index.controller")
const router = express.Router()

app.get("/", controller.index)
//aca el ("/") significa que lo redirigis al local host basicamente

module.exports = router 