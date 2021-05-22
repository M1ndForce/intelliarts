const express = require("express");
const router = express.Router();

const { clearController } = require("../controllers/index");

router.delete("/clear", clearController.clearCategory);

module.exports = router;
