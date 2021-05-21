const categoryModel = require("../models/Category");

class CategoryService {
  async findCategory(data) {
    return categoryModel.findOne(data);
  }
  async updateItemsLeft(name, count) {
    return categoryModel.findOneAndUpdate(name, count);
  }
  async addcategory(data) {
    return new categoryModel(data).save();
  }
}

module.exports = new CategoryService();
