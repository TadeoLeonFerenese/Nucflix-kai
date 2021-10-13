const express = require("express");
const orderController = require("../Controllers/orderController");
const router = express.Router();

router
  .route("/")
  .get(orderController.getOrder)
  .post(orderController.createOrder);

router
  .route("/:id")
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
