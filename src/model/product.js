const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: false
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model("Product", ProductSchema);