const express = require("express");
const controller = require("../controller/authController");
const router = express.Router();
//SEGUN LA DOC LA RUTA TIENE QUE ESTAR CONFIGURADA: requiere un JWT válido, configure la ruta con el checkJwt express-oauth2-jwt-bearermiddleware.
router.get("/",  )
