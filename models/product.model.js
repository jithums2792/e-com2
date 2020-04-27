const mongoose = require('mongoose');
const schema = mongoose.Schema;

const product = new schema({
   name: { type: String, required: true},
   image: {type: String},
   discription: { type: String, required: true},
   price: { type: Number, required: true},
   unit: {type: String},
   offerprice: { type: Number},
   badge: { type: String},
   badgeclass: { type: String},
   category: { type: String, required: true},
   subcategory: { type: String},
   attributes: { type: Array},
   quantity: {type: Number},
   owner: {type: String},
   createdAt: {type: Date},
   updatedprice: {type: Number},
   num: {type: Number}
});

const productModel = mongoose.model('products',product);
module.exports = productModel;