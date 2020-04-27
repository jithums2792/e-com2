const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
   name: {type: String, required: true},
   password: {type: String},
   email: {type: String},
   cart: {type:Array, unique: true},
   address: {type: Array},
   createdAt: {type: Date}

});

const userModel = mongoose.model('users',user);
module.exports = userModel;