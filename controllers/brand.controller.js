const brandModel = require('../models/brand.model')

function successhamdler(res,data){res.json({status:'success', data: data})}
function errorHandler(res,data){res.json({status:'error',data: data})}
exports.getbrand = async function getbrand(req, res){ await brandModel.find().then(resp => successhamdler(res,resp)).catch(err => errorHandler(res,err))}
exports.addbrand = async function addbrand(req, res) { let newbrand = new brandModel({ name: req.body.name, image: req.body.image});await newbrand.save().then(resp => successhamdler(res,resp)).catch(err => errorHandler(res,err))}
exports.updatebrandById = async function updatebrandById(req, res){await brandModel.findByIdAndUpdate(req.params.id,req.body,{new: true}).then(resp => successhamdler(res,resp)).catch(err => errorHandler(res,err))}
exports.deletebrandById = async function deletebrandById(req, res){await brandModel.findOneAndDelete(req.params.id).then(resp => successhamdler(res,resp)).catch(err => errorHandler(res,err))}

