const subcategoryModel = require('../models/subcategory.model');


function successHandler(res,data){res.json({status: 'success', data: data})}
function errorHandler(res,data){res.json({status: 'error', data: data})}

function getAllSubcategory(req, res) {subcategoryModel.find().then(data => successHandler(res,data)).catch(err => errorHandler(res,err))}
function getSubcategoryById(req, res) {subcategoryModel.findById(req.params.id).then(data => successHandler(res,data)).catch(err => errorHandler(res,err))}
function addSubcategory(req, res) {
    const newSubcategory = new subcategoryModel({
        name: req.body.name,
        pcat: req.body.pcat
    });
    newSubcategory.save().then(data => successHandler(res,data)).catch(err => errorHandler(res,err))
}
function updateSubcategoryById(req, res) {subcategoryModel.findByIdAndUpdate(req.params.id, req.body).then(data => successHandler(res,data)).catch(err => errorHandler(res,err))}
function deleteSubcategoryById(req, res) {subcategoryModel.findByIdAndDelete(req.params.id).then(data => successHandler(res,data)).catch(err => errorHandler(res,err))}
function getAllSubcategoryBycatname(req,res) {subcategoryModel.find({pcat: req.params.name}).then(data => successHandler(res,data)).catch(err => errorHandler(res,err))}

exports.getAllSubcategory = getAllSubcategory;
exports.getSubcategoryById = getSubcategoryById;
exports.addSubcategory = addSubcategory;
exports.updateSubcategoryById = updateSubcategoryById;
exports.deleteSubcategoryById = deleteSubcategoryById;
exports.getAllSubcategoryBycatname = getAllSubcategoryBycatname