//multer = multiruta
const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const router = require("./productRouter");

//AVERIGUAR COMO JORACA IMPORTAR ESTO PARA USARLO EN LAS VARIABLES
// import { Login } from "";
// import { Logout } from "";
// const Login = require("Login");
// const Logout = require("Logout");
// import { isAuth } from "../utils";

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });
uploadRouter.post("/", isAuth, upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

// const isAuth = (req, res) => {
//   const token = req.header.authorization;
//   if (authorization) {
//     const token = authorization.slice(7, authorization.length);
//     jwt.verify(
//       token,
//       process.env.JWT_SECRET || "somethingsecret",
//       (err, decode) => {
//         if (err) {
//           res.status(401).send({ mesage: "invaild Token" });
//         } else {
//           req.user = decode;
//           //"decode" decodifica la linea y lo anexa
//         }
//       }
//     );
//   } else {
//     res.status(401).send({ message: "No Token" });
//   }
// };

// export const isAdmin = (res, req) => {
//   if (req.user && req.user.isAdmin) {
//   } else {
//     res.status(401).send({ message: "Invalid Admin Token" });
//   }
// };

// export const isSeller = (res, req) => {
//   if (req.user && req.user.isSeller) {
//   } else {
//     res.status(401).send({ message: "Invalid Seller Token" });
//   }
// };

// //aca tengo que poner las condiciones para que reconozca que Logea o deslogea
// export const isSellerorAdmin = (res, req) => {
//   if ((req.user && req.user.Login) || req.user.Logout) {
//   } else {
//     res.status(401).send({ message: "invalid Login/Logout" });
//   }
// };

module.exports = router;
