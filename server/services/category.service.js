const snacksSchema = require("../models/Category");

class CategoryService {
  async findCategory(data) {
    return snacksSchema.findOne(data);
  }
  async updateItemsLeft(name, count) {
    return snacksSchema.findOneAndUpdate(name, count);
  }
  async addcategory(data) {
    return new snacksSchema(data).save();
  }
}

module.exports = new CategoryService();
