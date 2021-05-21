const purchaseModel = require("../models/Purchases");
const snacksModel = require("../models/Snacks");

class PurchaseServices {
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

module.exports = new PurchaseServices();
