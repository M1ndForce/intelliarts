const { addcategory } = require("../../services/category.service");

module.exports = async (req, res) => {
  try {
    const result = await addcategory(req.body);
    res.json(result);
  } catch (e) {
    console.log(e);
  }
};
