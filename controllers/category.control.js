const categoryModel = require('../models/category.model');
const subcategoryModel = require('../models/subcategory.model');

function successHandler(res,data){res.json({status: 'success', data: data})}
function errorHandler(res,data){res.json({status: 'error', data: data})}

function getAllCategory(req, res) {categoryModel.find().then(data => successHandler(res,data)).catch(err => errorHandler(res,err))}    
function getCategoryById(req, res) {categoryModel.findById(req.params.id).then(data => successHandler(res,data)).catch(err => errorHandler(res,err))}
function addCategory(req, res) {
    const newCategory = new categoryModel({
        name: req.body.name,
        icon: req.body.icon
    });
    newCategory.save().then(data => successHandler(res, data)).catch(err => errorHandler(res, err))
}
function updateCategoryById(req, res) {categoryModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => successHandler(res, data)).catch(err => errorHandler(res, err))}
function deleteCategoryById(req, res) {categoryModel.findByIdAndDelete(req.params.id).then(data => successHandler(res, data)).catch(err => errorHandler(res,err))}

exports.getAllCategory = getAllCategory;
exports.getCategoryById = getCategoryById;
exports.addCategory = addCategory;
exports.updateCategoryById = updateCategoryById;
exports.deleteCategoryById = deleteCategoryById;