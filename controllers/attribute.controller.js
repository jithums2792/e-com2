const attributeModel = require('../models/attributes.model');

async function getAllAttribute(req, res) {
    const attribute = await attributeModel.find();
    res.json(attribute);
}
async function getAttributeById(req, res) {
    const attribute = await attributeModel.findById(req.params.id);
    res.json(attribute);
}
async function addAttribute(req, res) {
    const newattribute = new attributeModel({
        name: req.body.name,
        options: req.body.options 
    });
    newattribute.save().then(resp => {
        res.json(resp);
    })
}
async function updateAttributeById(req, res) {
    attributeModel.findByIdAndUpdate(req.params.id, req.body).then(resp => {
        res.json(resp);
    })
}
async function deleteAttributeById(req, res) {
    attributeModel.findByIdAndDelete(req.params.id).then(resp => {
        res.json(resp);
    })
}

exports.getAllAttribute = getAllAttribute;
exports.getAttributeById = getAttributeById;
exports.addAttribute = addAttribute;
exports.updateAttributeById = updateAttributeById;
exports.deleteAttributeById = deleteAttributeById;