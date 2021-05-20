const purchaseSchema = require("../models/Purchases");
const snacksSchema = require("../models/Snacks");
const text = require("../const/text");

class PurchaseServices {
  async purchaseItem(req, res) {
    const purchaseData = req?.body;
    const snack = await snacksSchema.findOne({
      name: `${purchaseData?.name}`,
    });
    if (snack?.count > 0) {
      const purchase = await new purchaseSchema(purchaseData).save();
      await snacksSchema.findOneAndUpdate(
        { name: `${purchaseData?.name}` },
        { count: snack?.count - 1 }
      );
      res.json(purchase);
    } else if (snack?.count === 0) {
      res.json({ name: text.NO_ITEMS });
    }
  }
}

module.exports = new PurchaseServices();
