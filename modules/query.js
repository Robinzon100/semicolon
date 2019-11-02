const firebase = require("../modules/firebase");

exports.signUp = async (email, password) => {
  try {
    const res = await firebase.FirebaseAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    // if (res) {
    //   console.log(res.user.Q.uid);
    // }
    console.log(res);
    return { user: res.user, error: null };
  } catch (error) {
    return { user: null, error: error };
  }
};

exports.signIn = async (email, password) => {
  // try {
  const res = await firebase.FirebaseAuth.signInWithEmailAndPassword(
    email,
    password
  ).then(res => console.log(res));

  //   return { user: res.user, error: null };
  //   } catch (error) {
  //     return { user: null, error: error };
  //   }
};
