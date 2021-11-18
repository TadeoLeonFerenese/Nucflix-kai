const express = require("express");
const app = express ();

//RUTAS 
// const routes = require("./routers/index.routes") esto es igual que  lo de abajo 
app.use(require("./routers/index.routes"))


