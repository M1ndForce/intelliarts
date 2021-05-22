const mongoose = require("mongoose");
const text = require("../const/text");

const purchaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: String,
});

module.exports = mongoose.model(text.PURCHASES, purchaseSchema);
