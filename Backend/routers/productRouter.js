const express = require("express");
const productController = require("../Controllers/productController");
const router = express.Router();

router
  .router("/")
  .get(productController.getProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
