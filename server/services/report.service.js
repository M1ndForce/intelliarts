const purchaseSchema = require("../models/Purchase");

class reportService {
  async getAllReportsSortedByDate(data) {
    return purchaseSchema.find(data).sort({ date: -1 });
  }
}

module.exports = new reportService();
