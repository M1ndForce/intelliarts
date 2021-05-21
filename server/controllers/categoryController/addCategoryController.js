const { addcategory } = require("../../services/category.service");

module.exports = async (req, res) => {
  try {
    await addcategory(req, res);
  } catch (e) {
    console.log(e);
  }
};
