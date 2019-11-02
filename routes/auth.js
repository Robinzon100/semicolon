const express = require("express");
const router = express.Router();
const { check, body } = require("express-validator/check");



// ─── CONTROLERS ──────────────────────────────────────────────────────────────────
const auth = require("../controllers/auth");


// ?─── REGISTRATION ROUTES ────────────────────────────────────
router.get("/register", auth.getRegister);
router.post("/register", auth.getRegister);


module.exports = router;