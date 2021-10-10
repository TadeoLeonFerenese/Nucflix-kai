const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Cadena de conexion para MongoDB
    const con = await mongoose.connect(
      "mongodb+srv://BOBNervio:1234@cluster0.8qlum.mongodb.net/commerce?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB conectado");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
