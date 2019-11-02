const query = require("../modules/query");

exports.getRegister = (req, res, next) => {
  res.render("auth/registration.ejs");
};

exports.postRegister = (req, res, next) => {
  const { email, password } = req.body;
  
  query.signUp(email, password);
  req.session.email = email;
  // console.log(req.session.logedIn)


  res.redirect("/");
};

exports.getLogin = (req, res, next) => {
  res.render("auth/login.ejs");
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(email, password);
  signin = await query.signIn(email, password);
  // console.log(signin, "sign in item");

  req.session.logedIn = true;



  res.redirect("/");
};






exports.postLogout = (req, res, next) => {
  
  req.session.destroy();

  console.log(req.session);
  


  res.redirect("/");
};
