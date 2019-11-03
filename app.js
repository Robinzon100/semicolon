// ─── BASE IMPORTS ───────────────────────────────────────────────────────────────
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const volleyball = require("volleyball");
const nodemon = require("nodemon");
const query = require("./modules/query");

const session = require("express-session");

//
// ─── OUN IMPORTS ────────────────────────────────────────────────────────────────
//
const firebase = require('./modules/firebase');



require("dotenv").config();

app.use(express.json({
  type: ['application/json', 'text/plain']
}))


// ─── VIEW ENGINE ────────────────────────────────────────────────────────────────
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(volleyball);

app.use(
  session({
    secret: "yourSecret",
    resave: false,
    saveUninitialized: false
  })
);


app.use((req, res, next) => {
  if (req.session.user == undefined) {
    next();
  } else {
    const user = firebase.Firestore.collection('users').doc(req.session.user);
    // const user = firebase.Firestore.collection('users').doc(req.session.user);

    req.user = user;
    next();
  }
})


app.use("/login",(req, res, next) => {
    res.render("auth/login.ejs");
});

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//
const authRoutes = require("./routes/auth");
const clientRoutes = require("./routes/client");

// ─── USING THE ROUTES ───────────────────────────────────────────────────────────
app.use("/auth", authRoutes);
app.use(clientRoutes);

app.use("/", async (req, res, next) => {
  //   req.session.user = user;
  console.log(req.session, "sdnasdnasdnasdnaso");

  res.render("index.ejs");
  //   console.log(req.session);
});

app.use((req, res, next) => {
  res.render("index.ejs");
});

// const server = http2.createSecureServer({cert, key});

// server.listen(8443);
app.listen(3000);
