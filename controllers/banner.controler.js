const bannerModel = require('../models/banner.model')

exports.getBanner = async function getbanner(req, res){ await bannerModel.find().then(resp => res.json(resp)).catch(err => res.send(null))}
exports.addBanner = async function addBanner(req, res) { let newbanner = new bannerModel({ name: req.body.name, image: req.body.image});await newbanner.save().then(resp => res.json(resp)).catch(err => res.send(null))}
exports.updateBannerById = async function updateBannerById(req, res){await bannerModel.findByIdAndUpdate(req.params.id,req.body,{new: true}).then(resp => res.json(resp)).catch(err => res.send(null))}
exports.deleteBannerById = async function deleteBannerById(req, res){await bannerModel.findOneAndDelete(req.params.id).then(resp => res.json(resp)).catch(err => res.send(null))}

