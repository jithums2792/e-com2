const mongoose = require('mongoose');
const schema = mongoose.Schema;

const attribute = new schema({
   name: {type: String},
   options: {type: Array}
});

const attributeModel = mongoose.model('attributes',attribute);
module.exports = attributeModel;