const express = require("express");
const router = express.Router();

const { categoryController } = require("../controllers/index");

router.post("/category", categoryController.addCategory);

router.put("/category", categoryController.updateCategory);

module.exports = router;
