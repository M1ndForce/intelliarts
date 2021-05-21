const express = require("express");
const router = express.Router();
const { reportController } = require("../controllers/index");

router.get("/report", reportController.createReport);

router.get("/reportfromdate", reportController.createReportFromDate);

module.exports = router;
