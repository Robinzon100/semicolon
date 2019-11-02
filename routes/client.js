const express = require("express");
const router = express.Router();
// const { check, body } = require("express-validator/check");

// ─── CONTROLERS ──────────────────────────────────────────────────────────────────
const client = require("../controllers/client");

// ?─── REGISTRATION ROUTES ────────────────────────────────────
router.get("/", client.getIndex);


router.post("/utils", client.getUtils);


module.exports = router;
