const query = require("../modules/query");

exports.getRegister = (req, res, next) => {
  res.render("auth/registration.ejs");
};

exports.postRegister = (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  query.signUp(email, password);

  res.redirect("/");
};

exports.getLogin = (req, res, next) => {
  res.render("auth/login.ejs");
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  signin = await query.signIn(email, password);
  console.log(signin, "sign in item");

  res.redirect("/");
};
