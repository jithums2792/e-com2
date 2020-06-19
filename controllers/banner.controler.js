const bannerModel = require('../models/banner.model')

function successhamdler(res,data){res.json({status:'success', data: data})}
function errorHandler(res,data){res.json({status:'error',data: data})}
exports.getBanner = async function getbanner(req, res){ await bannerModel.find().then(resp => successhamdler(res,resp)).catch(err => errorHandler(res,err))}
exports.addBanner = async function addBanner(req, res) { let newbanner = new bannerModel({ name: req.body.name, image: req.body.image});await newbanner.save().then(resp => successhamdler(res,resp)).catch(err => errorHandler(res,err))}
exports.updateBannerById = async function updateBannerById(req, res){await bannerModel.findByIdAndUpdate(req.params.id,req.body,{new: true}).then(resp => successhamdler(res,resp)).catch(err => errorHandler(res,err))}
exports.deleteBannerById = async function deleteBannerById(req, res){await bannerModel.findOneAndDelete(req.params.id).then(resp => successhamdler(res,resp)).catch(err => errorHandler(res,err))}

