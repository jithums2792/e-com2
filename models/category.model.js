const mongoose = require('mongoose');
const schema = mongoose.Schema;

const category = new schema({
   name: {type: String, required: true},
   icon: {type: String}
});

const categoryModel = mongoose.model('categories',category);
module.exports = categoryModel;