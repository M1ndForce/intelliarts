const snacksSchema = require("../models/Snacks");

class SnackServices {
  async addItem(req, res) {
    const snackRequestData = req.body;
    const previousCount = await snacksSchema.findOne({
      name: `${snackRequestData?.name}`,
    });
    const snacks = await snacksSchema.findOneAndUpdate(
      { name: `${snackRequestData?.name}` },
      { count: previousCount?.count + snackRequestData?.count }
    );
    res.json(snacks);
  }
  async addcategory(req, res) {
    const snackData = req.body;
    const snacks = await new snacksSchema(snackData).save();

    res.json(snacks);
  }
}

module.exports = new SnackServices();
