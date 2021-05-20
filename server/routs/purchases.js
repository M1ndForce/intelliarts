const express = require("express");
const router = express.Router();

const { purchaseItem } = require("../services/purchase.services");

router.post("/purchase", async (req, res) => {
  try {
    await purchaseItem(req, res);
  } catch (e) {
    console.log(e);
  }
});

router.get("/report", async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
