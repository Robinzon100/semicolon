// ─── BASE IMPORTS ───────────────────────────────────────────────────────────────
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const volleyball = require("volleyball");
const nodemon = require("nodemon");
const query = require("./modules/query");

const session = require("express-session");

require("dotenv").config();

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

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//
const authRoutes = require("./routes/auth");

// ─── USING THE ROUTES ───────────────────────────────────────────────────────────
app.use("/auth", authRoutes);

query.authStateChange();

app.use("/", (req, res, next) => {
  res.render("index.ejs");
  console.log(req.session);
});

app.use((req, res, next) => {
  res.render("index.ejs");
});

// const server = http2.createSecureServer({cert, key});

// server.listen(8443);
app.listen(3000);
