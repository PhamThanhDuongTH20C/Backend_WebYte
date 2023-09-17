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
  });
  const Specifications = mongoose.model("Specifications", SpecificationsSchema);
  
  module.exports =  Specifications ;