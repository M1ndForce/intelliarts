const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";

const snacksSchema = require("../models/Snacks");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/addsnack", async (req, res) => {
  try {
    const snackData = req.body;
    if (!snackData?.price) {
      MongoClient.connect(
        url,
        { useUnifiedTopology: true },
        async (err, db) => {
          if (err) throw err;
          const dbo = db.db("snacks");
          const snackName = { name: snackData?.name };
          const previousCount = await dbo
            .collection("snacks")
            .findOne(snackName);
          const newCount = {
            $set: { count: previousCount.count + snackData?.count },
          };
          dbo
            .collection("snacks")
            .findOneAndUpdate(
              snackName,
              newCount,
              { returnOriginal: false },
              (err, response) => {
                if (err) throw err;
                res.json(response.value);
                db.close();
              }
            );
        }
      );
    } else {
      const snacks = await new snacksSchema(snackData).save();

      res.json(snacks);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
