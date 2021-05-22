const categoryModel = require("../models/Category");

class ListService {
  async findAndDeleteWhereCountZero() {
    return categoryModel.deleteMany({ count: 0 });
  }
  async findAndReturnItemsWhereCountZero(){
      return categoryModel.find({ count: 0 });
  }
}

module.exports = new ListService();
