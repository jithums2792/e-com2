const subcategoryModel = require('../models/subcategory.model');

async function getAllSubcategory(req, res) {
    const subcategory = await subcategoryModel.find();
    res.json(subcategory);
}
async function getSubcategoryById(req, res) {
    const subcategory = await subcategoryModel.find({pcat: req.params.id});
    res.json(subcategory);
}
async function addSubcategory(req, res) {
    const newSubcategory = new subcategoryModel({
        name: req.body.name,
        pcat: req.body.pcat
    });
    newSubcategory.save().then(resp => {
        res.json(resp);
    })
}
async function updateSubcategoryById(req, res) {
    subcategoryModel.findByIdAndUpdate(req.params.id, req.body).then(resp => {
        res.json(resp);
    })
}
async function deleteSubcategoryById(req, res) {
    subcategoryModel.findByIdAndDelete(req.params.id).then(resp => {
        res.json(resp);
    })
}

exports.getAllSubcategory = getAllSubcategory;
exports.getSubcategoryById = getSubcategoryById;
exports.addSubcategory = addSubcategory;
exports.updateSubcategoryById = updateSubcategoryById;
exports.deleteSubcategoryById = deleteSubcategoryById;