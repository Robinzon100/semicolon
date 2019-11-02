const firebase = require("../modules/firebase");

exports.signUp = async (email, password) => {
  try {
    const res = await firebase.FirebaseAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (res) {
      console.log(res.user.Q.uid);
    }
    return { user: res.user, error: null };
  } catch (error) {
    return { user: null, error: error };
  }
};

exports.signIn = async (email, password) => {
  try {
    const res = await firebase.FirebaseAuth.signInWithEmailAndPassword(
      email,
      password
    );

    return { user: res.user, error: null };
  } catch (error) {
    return { user: null, error: error };
  }
};

// exports.authStateChange = async () => {
//   firebase.FirebaseAuth.onAuthStateChanged(res => {
//     return res;
//   });
// };

exports.signOut = async () => {
  // const res = await
  firebase.FirebaseAuth.signOut()
    .then(function() {
      console.log("signed out");
      // Sign-out successful.
    })
    .catch(function(error) {
      console.log("sign out error ", error);
      // An error happened.
    });
};
