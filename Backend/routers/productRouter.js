const express = require("express");
const productController = require("../Controllers/productController");
const router = express.Router();

// Aca uso la variable de entorno ".env" que cree para llamar la ruta de auth0
router.route(".env").get(Login_Auth0, Logout_Auth0, Profile_Auth0);

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
