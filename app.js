// ─── BASE IMPORTS ───────────────────────────────────────────────────────────────
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const volleyball = require("volleyball");
const nodemon = require("nodemon");

const query = require("./modules/query");

require("dotenv").config();

// ─── VIEW ENGINE ────────────────────────────────────────────────────────────────
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(volleyball);
// app.use((req, res, next) => {
//   req.user = query.onAuthStateChanged();

//   //   if (req.session.user === undefined) {
//   //     next();
//   //   }else{

//   //   }
// });

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//
const authRoutes = require("./routes/auth");

// ─── USING THE ROUTES ───────────────────────────────────────────────────────────
app.use("/auth", authRoutes);

app.use((req, res, next) => {
  res.render("index.ejs");
});

app.use("/", (req, res, next) => {
  query.onAuthStateChanged();

  res.render(
    "index.ejs"
    //    { loggedIn: req.body.isLoggedin }
  );
});

// const server = http2.createSecureServer({cert, key});

// server.listen(8443);
app.listen(3000);
