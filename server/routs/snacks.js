const express = require("express");
const router = express.Router();

const snacksSchema = require("../models/Snacks");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/addcategory", async (req, res) => {
  try {
    const snackData = req.body;
    const snacks = await new snacksSchema(snackData).save();

    res.json(snacks);
  } catch (e) {
    console.log(e);
  }
});

router.put("/additem", async (req, res) => {
  try {
    const snackRequestData = req.body;
    const previousCount = await snacksSchema.findOne({
      name: `${snackRequestData?.name}`,
    });
    const snacks = await snacksSchema.findOneAndUpdate(
      { name: `${snackRequestData?.name}` },
      { count: previousCount?.count + snackRequestData?.count }
    );
    res.json(snacks);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
