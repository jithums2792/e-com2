const mongoose = require('mongoose');
const schema = mongoose.Schema;

const subcategory = new schema({
   name: {type: String, required: true},
   pcat: {type: String}
});

const subcategoryModel = mongoose.model('subcategories',subcategory);
module.exports = subcategoryModel;