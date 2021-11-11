const express = require("express");

const morgan = require("morgan");
const productRouter = require("./routers/productRouter");
const session = require("express-session");
const dotenv = require("dotenv");
const userInViews = require("./lib/middleware/userInViews");
const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

dotenv.config();
const app = express();

//MIDDLEWARES

app.use(express.json());
app.use(morgan("dev"));

//Auth0 -- configuracion de express-session

// config express-session
var sess = {
  secret: "CHANGE THIS TO A RANDOM SECRET",
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

if (app.get("env") === "production") {
  // Use secure cookies in production (requires SSL/TLS)
  sess.cookie.secure = true;
}

// Load Passport
var passport = require("passport");
var Auth0Strategy = require("passport-auth0");

// Configure Passport to use Auth0
var strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || "http://localhost:3000/callback",
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

//ROUTES

app.use(".products", productRouter);
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
app.use(userInViews());
app.use("/", authRouter);
app.use("/", indexRouter);
app.use("/", usersRouter);

module.exports = app;
