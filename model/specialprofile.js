const mongoose = require('mongoose');

const SpecialProfileSchema = new mongoose.Schema({
    skuprofile: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  });
const SpecialProfile = mongoose.model("SpecialProfile", SpecialProfileSchema);
module.exports = SpecialProfile;