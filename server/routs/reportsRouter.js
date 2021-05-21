const express = require("express");
const router = express.Router();

const { reportMonth, reportFromDate } = require("../services/report.services");

router.get("/report", async (req, res) => {
  try {
    await reportMonth(req, res);
  } catch (e) {
    console.log(e);
  }
});

router.get("/reportfromdate", async (req, res) => {
  try {
    await reportFromDate(req, res);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
