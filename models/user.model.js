const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
   name: {type: String, required: true},
   password: {type: String},
   email: {type: String},
   address: {type: Array},
   createdAt: {type: Date},
   cart: {type: Array}

});

const userModel = mongoose.model('users',user);
module.exports = userModel;