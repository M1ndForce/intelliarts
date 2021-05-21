const purchaseSchema = require("../models/Purchase");

class reportService {
  async reportMonth(req, res) {
    const response = await purchaseSchema
      .find({
        name: req?.body?.name,
      })
      .sort({ date: -1 });
    const result = response.filter((item) =>
      item.date.startsWith(`${req?.body?.date}`)
    );
    res.json(result);
  }

  async reportFromDate(req, res) {
    const response = await purchaseSchema
      .find({
        name: req?.body?.name,
      })
      .sort({ date: -1 });
    const result = response.filter((item) => item.date >= `${req?.body?.date}`);
    res.json(result);
  }
}

module.exports = new reportService();
