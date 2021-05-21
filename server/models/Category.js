const mongoose = require("mongoose");

const snacksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Snacks", snacksSchema);
