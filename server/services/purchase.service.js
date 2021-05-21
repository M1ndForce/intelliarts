const purchaseModel = require("../models/Purchase");
const snacksModel = require("../models/Category");

class PurchaseService {
  async getCategoryRecordFromDB(purchaseData) {
    return snacksModel.findOne(purchaseData);
  }

  async savePurchaseRecordToDB(purchaseData) {
    return new purchaseModel(purchaseData).save();
  }

  async updateSnackCountInCategory(purchaseData, snackCount) {
    await snacksModel.findOneAndUpdate(purchaseData, snackCount);
  }
}

module.exports = new PurchaseService();
