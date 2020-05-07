const subcategoryModel = require('../models/subcategory.model');

async function getAllSubcategory(req, res) {
    const subcategory = await subcategoryModel.find();
    res.json(subcategory);
}
async function getSubcategoryById(req, res) {
                                            ///CHANGE
    const subcategory = await subcategoryModel.findById(req.params.id).then(
        reslt=>{
            res.json(reslt)
        }
    ).catch(err=>{
         res.json([{}]) 
    });
    ;
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
    subcategoryModel.findByIdAndUpdate(req.params.id, req.body,).then(resp => {
        res.json(resp);
    })
}
async function deleteSubcategoryById(req, res) {
    //console.log(req.params.id)
    subcategoryModel.findByIdAndDelete(req.params.id).then(resp => {
        res.json(resp);
        //console.log(resp)
    })
}

exports.getAllSubcategory = getAllSubcategory;
exports.getSubcategoryById = getSubcategoryById;
exports.addSubcategory = addSubcategory;
exports.updateSubcategoryById = updateSubcategoryById;
exports.deleteSubcategoryById = deleteSubcategoryById;