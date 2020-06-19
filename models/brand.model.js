const mongoose = require('mongoose');
const schema = mongoose.Schema;

const brand = new schema({
   name: {type: String, required: true},
   image: {type: String, required: true}

});

const brandModel = mongoose.model('brands',brand);
module.exports = brandModel;