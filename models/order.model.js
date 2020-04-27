const mongoose = require('mongoose');
const schema = mongoose.Schema;

const order = new schema({
   name: { type: String, required: true},
   userid: { type: String},
   orders: {type: Array}
   
});

const orderModel = mongoose.model('orders',order);
module.exports = orderModel;