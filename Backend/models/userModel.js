const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: [type, "User must have a name"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  createAd: {
    type: Date,
    default: Date.now(),
  },
  isAdmin: { type: Boolean, default: false, required: true },
  isSeller: { type: Boolean, default: false, required: true },
  seller: {
    name: String,
    logo: String,
    descriptions: String,
  },
});

mongoose.exports = mongoose.model("User", userSchema);
