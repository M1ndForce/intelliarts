const { findAllCategories } = require("../../services/list.service");
const sortByItemsLeft = require("../../helpers/listHelper");

module.exports = async (req, res) => {
  try {
    const allCategories = await findAllCategories();
    const result = sortByItemsLeft(allCategories);
    res.json(result);
  } catch (e) {
    console.log(e);
  }
};
