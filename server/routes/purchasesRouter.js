const express = require("express");
const router = express.Router();
const { purchasesController } = require("../controllers/index");

router.post("/", purchasesController.createPurchase);

module.exports = router;
