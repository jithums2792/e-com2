const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cart = new schema({
   userid: {type: String, required: true},
   products: {type: Array}
});

const cartModel = mongoose.model('carts',cart);
module.exports = cartModel;