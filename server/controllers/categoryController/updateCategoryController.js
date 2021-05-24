const {
  findCategory,
  updateItemsLeft,
} = require("../../services/category.service");

module.exports = async (req, res) => {
  try {
    const itemName = { name: `${req.body?.name}` };
    const foundItem = await findCategory(itemName);
    const updatedItem = await updateItemsLeft(itemName, {
      count: foundItem?.count + req.body?.count,
    });
    res.json(updatedItem);
  } catch (e) {
    console.log(e);
  }
}
