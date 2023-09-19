const mongoose = require("mongoose");

const ImageProductsSchema = new mongoose.Schema({
  skupimg: {
    type: String,
    required: true,
  },
  urlimage: {
    type: String,
  },
});

const ImageProducts = mongoose.model("ImageProducts", ImageProductsSchema);

module.exports = ImageProducts;
