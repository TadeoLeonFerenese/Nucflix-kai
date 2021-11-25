const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
var MongoClient = require("mongodb").MongoClient;
dotenv.config({ path: "./mongoDb.env" });
// const connectDB = require("./database/connection");
const app = express();

//DB Ejecuta el archivo CONNECTION
MongoClient.connect(5000, (err, db) => {
  // if (err) throw err;
  console.log("Mongodb is running");
  // db.close();
});

//START SERVER

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http:${PORT}`);
});

// ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, "./public")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
