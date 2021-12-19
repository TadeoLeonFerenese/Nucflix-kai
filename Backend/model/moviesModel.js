const mongoose = require("mongoose");

const MovieSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: { type: String },
    img: { type: String },
    imgSm: { type: String },
    trailer: { type: Boolean },
    video: { type: Boolean },
    year: { type: Boolean },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
