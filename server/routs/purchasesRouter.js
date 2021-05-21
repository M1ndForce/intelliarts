const express = require("express");
const router = express.Router();
const { purchasesController } = require("../controllers/index");

router.post("/purchase", purchasesController.createPurchase);

module.exports = router;
