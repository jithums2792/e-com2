const mongoose = require('mongoose');
const schema = mongoose.Schema;

const product = new schema({
   name: { type: String, required: true},
   image: {type: String},
   discription: { type: String, required: true},
   price: { type: String, required: true},
   offerprice: { type: String},
   badge: { type: String},
   badgeclass: { type: String},
   category: { type: String, required: true},
   subcategory: { type: String},
   attributes: { type: Array},
   quantity: {type: String}
});

const productModel = mongoose.model('products',product);
module.exports = productModel;