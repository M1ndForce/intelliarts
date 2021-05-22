const categoryModel = require("../models/Category");

class ListService {
    async findAllCategories (){
        return categoryModel.find()
    }
}

module.exports = new ListService();
