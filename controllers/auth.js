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

exports.getLogin = (req, res, next) => {
  res.render("auth/login.ejs");
};

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);

  query.signIn(email, password);
  res.redirect("/");
};
