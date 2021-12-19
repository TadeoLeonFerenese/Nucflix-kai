const express = require("express");
const {
  userGet,
  userPut,
  userRegister,
  userSignIn,
  userSignInAuth0,
  userDelete,
} = require("../controller/userController");
const router = express.Router();

//SEGUN LA DOC LA RUTA TIENE QUE ESTAR CONFIGURADA: requiere un JWT válido, configure la ruta con el checkJwt express-oauth2-jwt-bearermiddleware.
router.get("/", userGet);

router.put("/", userPut);

router.post("/register", userRegister);
router.post("/signin", userSignIn);
router.post("/signinAuth0", userSignInAuth0);

router.delete("/", userDelete);

module.exports = router;
