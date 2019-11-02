const query = require("../modules/query");
const session = require("express-session");

exports.getRegister = (req, res, next) => {
  res.render("auth/registration.ejs");
};

exports.postRegister = (req, res, next) => {
  const { email, password } = req.body;

  query.signUp(email, password);

  res.redirect("/");
};
