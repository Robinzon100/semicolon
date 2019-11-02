const express = require("express");
const router = express.Router();
// const { check, body } = require("express-validator/check");

// ─── CONTROLERS ──────────────────────────────────────────────────────────────────
const auth = require("../controllers/auth");

// ?─── REGISTRATION ROUTES ────────────────────────────────────
router.get("/register", auth.getRegister);
router.post("/register", auth.postRegister);

router.get("/login", auth.getLogin);
router.post("/login", auth.postLogin);

module.exports = router;
