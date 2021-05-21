const { addItem } = require("../../services/category.service");

module.exports = async (req, res) => {
  try {
    await addItem(req, res);
  } catch (e) {
    console.log(e);
  }
};
