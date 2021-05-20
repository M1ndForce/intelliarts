const express = require("express");
const router = express.Router();

const { report } = require("../services/report.services");

router.get("/report", async (req, res) => {
  try {
    await report(req, res);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
