// If the user is not logged in, the requested route will be stored in the session and the user will be redirected to the login page

module.exports = function () {
  return function secured(req, res, next) {
    if (req.user) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
  };
};
