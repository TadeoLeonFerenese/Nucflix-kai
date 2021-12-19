//req = request = peticion del cliente
//res = response = respuesta del servidor
//cliente = navegador
const express = require("express");
const path = require("path");
const app = express();

//RUTAS
app.use(require("./routes/listRoutes"));
app.use(require("./routes/moviesRoutes"));
app.use(require("./routes/userRoutes"));

//MIDDLEWARES

// parseo y lectura del body
app.use(express.json());
