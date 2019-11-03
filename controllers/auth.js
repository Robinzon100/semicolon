const query = require("../modules/query");
const firebase = require("../modules/firebase");

exports.getRegister = (req, res, next) => {
  res.render("auth/registration.ejs");
};

exports.postRegister = async (req, res, next) => {
  const { email, password } = req.body;

  let user = await query.signUp(email, password);
  // let uid = user.uid;

  console.log(user)


  let docRef = firebase.Firestore.collection('sessions');




  docRef.set({
    Uid: uid
  });

  // console.log(req.session.logedIn)

  res.redirect("/");
};

exports.getLogin = (req, res, next) => {
  res.render("auth/login.ejs");
};

exports.postLogout = (req, res, next) => {
  query.signOut();
  console.log(req.session.user, "dandasdoashdoiashoidhasoih");
  req.session.user = null;
  res.redirect("/");
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(email, password);
  await query.signIn(email, password);
  //   console.log(signin, "sign in item");
  let userId;
  await firebase.FirebaseAuth.onAuthStateChanged(res => {
    userId = res.uid;
  });
  req.session.user = userId;
  console.log(req.session.user, "inside of session is the user");

  //   req.session.user = email;

  res.redirect("/");
};






exports.postLogout = (req, res, next) => {

  req.session.destroy();

  console.log(req.session);



  res.redirect("/");
};
