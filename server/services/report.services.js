const purchaseSchema = require("../models/Purchases");

class reportServices {
  async report(req, res) {
    const response = await purchaseSchema.find({
      year: `${req?.body?.year}`,
      month: `${req?.body?.month}`,
    });
    res.json(response);
  }
}

module.exports = new reportServices();
