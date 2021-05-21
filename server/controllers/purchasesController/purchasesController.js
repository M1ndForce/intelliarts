const text = require("../../const/text");

const {
  getCategoryRecordFromDB,
  savePurchaseRecordToDB,
  updateSnackCountInCategory,
} = require("../../services/purchase.services");

module.exports = async (req, res) => {
  try {
    const snackData = await getCategoryRecordFromDB({
      name: `${req.body?.name}`,
    });
    if (snackData?.count > 0) {
      await updateSnackCountInCategory(
        { name: `${req.body?.name}` },
        { count: snackData?.count - 1 }
      );
      const purchase = await savePurchaseRecordToDB(req.body);
      res.json(purchase);
    } else if (snackData?.count === 0) {
      res.json({ name: text.NO_ITEMS });
    }
  } catch (e) {
    console.log(e);
  }
};
