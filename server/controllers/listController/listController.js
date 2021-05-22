const { findAllCategories } = require("../../services/list.service");

module.exports = async (req, res) => {
  try {
    const allCategories = await findAllCategories();
    res.json(allCategories);
  } catch (e) {
    console.log(e);
  }
};
