const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
var MongoClient = require("mongodb").MongoClient;
dotenv.config({ path: "./mongoDb.env" });
const app = express();
const { auth } = require("express-oauth2-jwt-bearer");
const { requiredScopes } = require("express-oauth2-jwt-bearer");
const checkScopes = requiredScopes("read:messages");

//DB Ejecuta el archivo CONNECTION
MongoClient.connect(5000, (err, db) => {
  console.log("Mongodb is running");
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
  audience: "YOUR_API_IDENTIFIER", // COMPLETAR CAMPOS CON EL DOMAIN Y API IDENTIFIER DE AUTH0
  issuerBaseURL: `https://YOUR_DOMAIN/`,
});

// This route needs authentication //GET /api/private-scoped: disponible para solicitudes autenticadas que contienen un token de acceso con el read:messagesalcance otorgado
app.get("/api/private", checkJwt, function (req, res) {
  res.json({
    message:
      "Hello from a private endpoint! You need to be authenticated to see this.",
  });
});

//INSTALAR MIDDLEWARES "CHECKJWT y REQUIREDSCOPES"
app.get("/api/private-scoped", checkJwt, checkScopes, function (req, res) {
  res.json({
    message:
      "Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.",
  });
});
