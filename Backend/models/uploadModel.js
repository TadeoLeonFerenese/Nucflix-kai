const mongoose = require("mongoose");
const uploadSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

monogose.exports = mongoose.model("Upload", uploadSchema);
