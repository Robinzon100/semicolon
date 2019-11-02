// ─── BASE IMPORTS ───────────────────────────────────────────────────────────────
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const volleyball = require("volleyball");
const nodemon = require('nodemon');
// const session = require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);
// const flash = require("connect-flash");
// const multer = require("multer");
// const compression = require('compression');
require("dotenv").config();



 
// ─── VIEW ENGINE ────────────────────────────────────────────────────────────────
app.set("view engine", "ejs");
app.set("views", "views");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" }));

 
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

 

app.use(volleyball);

 
app.use((req, res, next) => {
    res.status(404).send("<h1>404 - Not Found!</h1>");
});

// const server = http2.createSecureServer({cert, key});

// server.listen(8443);
app.listen(3000);
