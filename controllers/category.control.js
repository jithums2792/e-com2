const categoryModel = require('../models/category.model');
const subcategoryModel = require('../models/subcategory.model');

async function getAllCategory(req, res) {
    const categories = await categoryModel.find();
    res.json(categories);
}
async function getCategoryById(req, res) {
    const category = await categoryModel.findById(req.params.id);
    res.json(category);
}
async function getSubcategoyByCatId(req, res) {
    const subcategory = await subcategoryModel.find({pcat: req.params.catId});
    res.json(subcategory);
}
async function addCategory(req, res) {
    const newCategory = new categoryModel({
        name: req.body.name,
        icon: req.body.icon
    });
    newCategory.save().then(resp => {
        res.json(resp);
    })
}
async function updateCategoryById(req, res) {
     categoryModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(resp => {
         res.json(resp)
     })
}
async function deleteCategoryById(req, res) {
    categoryModel.findByIdAndDelete(req.params.id).then(resp => {
        res.json(resp);
    })
}

exports.getAllCategory = getAllCategory;
exports.getCategoryById = getCategoryById;
exports.getSubcategoyByCatId = getSubcategoyByCatId;
exports.addCategory = addCategory;
exports.updateCategoryById = updateCategoryById;
exports.deleteCategoryById = deleteCategoryById;