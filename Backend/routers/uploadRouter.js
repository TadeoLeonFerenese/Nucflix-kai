const express = require("express");
const uploadController = require("../Controllers/uploadController");
const router = express.Router();

router
  .route("/")
  .get(uploadController.getUploads)
  .post(uploadController.createUploads);

router
  .route("/:id")
  .get(uploadController.getUploads)
  .patch(uploadController.createUploads)
  .delete(uploadController.deleteUploads);

module.exports = router;
