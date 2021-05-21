const express = require("express");
const router = express.Router();

const { addItem, addcategory } = require("../services/snack.service");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/addcategory", async (req, res) => {
  try {
    await addcategory(req, res);
  } catch (e) {
    console.log(e);
  }
});

router.put("/additem", async (req, res) => {
  try {
    await addItem(req, res);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
