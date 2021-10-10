const express = require("express");

const morgon = require("morgan");
const productRouter = require("./routers/productRouter");
const orderRouter = require("./routers/orderRouter");
const uploadRouter = require("./routers/uploadRouter");
const userRouter = require("./routers/userRouter");

const app = express();

//MIDDLEWARES

app.use(express.json());
app.use(morgan("dev"));

//ROUTES

app.use("./users", userRouter);
app.use(".products", productRouter);
app.use("./orders", orderRouter);
app.use("./uploads", uploadRouter);

module.exports = app;
