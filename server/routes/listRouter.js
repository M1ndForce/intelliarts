const express = require("express");
const router = express.Router();

const { listController } = require("../controllers/index");

router.get("/list", listController.listOfCategories);


module.exports = router;
