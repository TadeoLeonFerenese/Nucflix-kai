const MongoClient = require("mongodb");

const connectDB = async () => {
  try {
    //cadena de conexion para MongoDB
    const con = await mongodb.connect(process.env.DATA_BASE || 5000, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB conecatado");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
