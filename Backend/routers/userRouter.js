const express = require("express");
const bcrypt = require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const data = require("../data");
const user = require("../models/userModel");
const { generateToken, isAdmin, isAuth } = require("../utils");

const userRouter = express.Router();

// HAGO EL RANKING DE LOS MEJORES VENDEDORES
userRouter.get(
  "top-sellers",
  expressAsyncHandler(async (req, res) => {
    const topSellers = await user
      .find({ isSeller: true })
      .sort({ "seller.rating": -1 })
      .limit(3);
    res.send(topSellers);
  })
);

//ESTOY INSERTANDO LA DATA DE LOS NUEVOS USARIOS
userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

//LOGIN
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          isAdmin: user.isAdmin,
          isSeller: user.isSeller,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid Mail or Password papu" });
  })
);

//REGISTRO
userRouter.post(
  "register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);

//Busca el ID del obj USUARIO Y SI NO ESTA DA ERROR 404, PERO
//SI LO ENCUENTRA DA LOS DATOS DEL USUARIO
userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User Not Found ameo" });
    }
  })
);

//ARMA EL PERFIL LLAMANDO EL OBJD ESDE MONGO
userRouter.put(
  "/profile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (user) {
      user.name = req.body.name || user.name;
      user.email = reqbody.email || user.email;
      if (user.isSeller) {
        user.seller.name = req.body.sellerName || user.seller.name;
        user.seller.logo = req.body.sellerLogo || user.seller.logo;
        user.seller.description =
          req.body.sellerDescription || user.seller.description;
      }
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        isSeller: user.isSeller,
        token: generateToken(updatedUser),
      });
    }
  })
);

//HACE UNR EQUEST DE LA DATA DE LOS USUARIOS
userRouter.get(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.find({});
    res.send(users);
  })
);

//ACA ACLARO A MONGO QUE BORRE TAL IP
userRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.dinfById(req.params.id);
    if (user) {
      if (user.email === "admin@example.com") {
        res.status(400).send({ message: "Can Not Delete Admin User" });
        return;
      }
      const deleteUser = await user.remove();
      res.send({ message: "User Delete", user: deleteUser });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

//ACA CREA LA LOS USUARIOS EN MONGO Y EN CASO DE QUE NO ESTE DA ERROR
userRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isSeller = Boolean(req.body.isSeller);
      user.isAdmin = Boolean(req.body.isAdmin);
      // user.isAdmin = req.body.isAdmin || user.isAdmin;
      const updateUser = await user.save();
      res.send({ message: "User Update", user: updateUser });
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

module.exports = userRouter;
