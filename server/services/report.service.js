const purchaseSchema = require("../models/Purchase");

class reportService {
  async reportMonth(req, res) {
    const requestedDate = new Date(req?.body?.date);
    const response = await purchaseSchema
      .find({
        name: req?.body?.name,
      })
      .sort({ date: -1 });
    console.log(response);
    res.json(response);
  }

  async reportFromDate(req, res) {
    const response = await purchaseSchema.find({
      year: `${req?.body?.year}`,
      month: `${req?.body?.month}`,
    });
    res.json(response);
  }
}

module.exports = new reportService();
