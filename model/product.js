const mongoose = require('mongoose');////model product
const ProductSchema = new mongoose.Schema({
  sku: {
    type: String,
    required:true
  },
  productname: {
    type: String,

  },
  fullproductname: {
    type: String,

  }, 
  urlname: {
    type: String,
    
  },
  originalprice: {
    type: Number,
    
  },
  sellprice: {
    type: Number,
    
  },
  despription: {
    type: String,
    
  },
  quantity: {
    type: Number,
    
  },
  brand: {
    type: String,
    
  },
  wanrrantyperiod: {
    type: String,
    
  },
  manualcontent: {
    type: String,
    
  },
  technicalspecifications: {
    type: String,
   
  },
  contacttopurchase: {
    type: String,
   
  },
  profile: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  ],
  specialprofile: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SpecialProfile",
    },
  ],
});


const Product = mongoose.model('Product', ProductSchema);

module.exports =  Product;
