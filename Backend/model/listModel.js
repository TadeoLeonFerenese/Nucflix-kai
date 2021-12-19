const mongoose = require("mongoose");

const ListSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    type: { type: String },
    genre: { type: String },
    isSeries: { type: Boolean },
    content: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);
//Esto es un esquema generico "index" luego remplazar por el resto de las rutas que voy a usar
