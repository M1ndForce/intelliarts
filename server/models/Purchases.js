const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    day: { type: String, default: 0 },
    month: { type: String, default: 0 },
    year: { type: String, default: 0 },
  },
});

module.exports = mongoose.model("Purchases", purchaseSchema);
