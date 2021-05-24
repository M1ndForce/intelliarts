const router = require("express").Router();

const {
  categoryController: { addCategory, clearCategory, updateCategory },
} = require("../controllers");

router.post("/", addCategory);
router.put("/", updateCategory);
router.delete("/", clearCategory);

module.exports = router;
