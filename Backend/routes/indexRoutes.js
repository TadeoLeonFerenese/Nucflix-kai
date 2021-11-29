const express = require("express");
const controller = require("../controller/indexController");
const router = express.Router();

router.get("/", (req, res, ) => {

});//aca el ("/") el usuario lo primero que ve es un Slas, es la primera ruta

router.get("/signup", (req, res, ) => {

}); //En esta ruta el usuario se registra basicamente y se envian sus datos

router.post("/signup", (req, res, ) => {

}); //aca se reciben los datos y por eso se usa "POST"

router.get("/signin", (req, res, ) => {

}); //Aca tambien se envian los datos del registro, se escucn y se validan

router.post("/signin", (req, res, ) => {

}); //se reciben los datos 


module.exports = router;
