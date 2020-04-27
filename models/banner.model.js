const mongoose = require('mongoose');
const schema = mongoose.Schema;

const banner = new schema({
   name: {type: String, required: true},
   image: {type: String, required: true}

});

const bannerModel = mongoose.model('banners',banner);
module.exports = bannerModel;