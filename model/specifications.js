const mongoose = require("mongoose");

const SpecificationsSchema = new mongoose.Schema({
    skuprofile: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

  });
  const Specifications = mongoose.model("Specifications", SpecificationsSchema);
  
  module.exports =  Profile ;