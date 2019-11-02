const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyAw-d8AMzPTx56XHA5SlGPOoRM5dXHyyro",
  authDomain: "semicolon-7db7e.firebaseapp.com",
  databaseURL: "https://semicolon-7db7e.firebaseio.com",
  projectId: "semicolon-7db7e",
  storageBucket: "semicolon-7db7e.appspot.com",
  messagingSenderId: "155566966985"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const FirebaseAuth = firebase.auth();

const Firestore = firebase.firestore();

module.exports = { FirebaseAuth, Firestore, firebase };
