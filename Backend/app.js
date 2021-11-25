//req = request = peticion del cliente
//res = response = respuesta del servidor
//cliente = navegador
const express = require("express");
const path = require("path");
const app = express();

//RUTAS
app.use(require("./routes/index.routes"));

// ARCHIVOS ESTATICOS
// app.use(express.static(path.join(__dirname, "./public")));

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

//SERVER ON //ACA NO VA EL SV POR QUE NO CORRESPONDE CON LA ARQUITECTURA USADA
// app.listen(3000, () => {
//   console.log("Server is running on APP");
// });
