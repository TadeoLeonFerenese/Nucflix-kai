const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
var MongoClient = require("mongodb").MongoClient;
dotenv.config({ path: "./mongoDb.env" });
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');

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

//AUTH CONFIG

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.

const checkJwt = auth({
  audience: 'YOUR_API_IDENTIFIER',// COMPLETAR CAMPOS CON EL DOMAIN Y API IDENTIFIER DE AUTH0
  issuerBaseURL: `https://YOUR_DOMAIN/`,
});


