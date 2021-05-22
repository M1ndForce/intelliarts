const purchaseModel = require("../models/Purchase");
const categoryModel = require("../models/Category");

class reportService {
  async getAllReportsSortedByDate() {
    return purchaseModel.find().sort({ date: -1 });
  }
  async getCategoryPriceByName(data) {
    return categoryModel.findOne(data);
  }
}

module.exports = new reportService();
