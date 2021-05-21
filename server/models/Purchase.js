const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: String,
});

module.exports = mongoose.model("Purchases", purchaseSchema);
