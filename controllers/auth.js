const query = require("../modules/query");

exports.getRegister = (req, res, next) => {
  res.render("auth/registration.ejs");
};

exports.postRegister = (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  query.signUp(email, password);

  res.redirect("/auth/register");
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
