const productModel = require('../models/product.model');

async function getAllProducts(req, res) {
    const produts = await productModel.find();
    res.json(produts);
}

async function getProductByCategoryId(){};
async function getProductById(req, res){
const product = await productModel.findById(req.params.id);
res.json(product);
};
async function addProduct(req, res) {
    const product = new productModel({
        name: req.body.name,
        image: req.body.image,
        discription: req.body.discription,
        price: req.body.price,
        offerprice: req.body.offerprice,
        badge: req.body.badge,
        badgeclass: req.body.badgeclass,
        category: req.body.category,
        subcategory: req.body.subcategory,
        attributes: req.body.attributes,
        quantity: req.body.quantity
    });
    await product.save();
    res.json(product);
}
async function updateProductById(req, res) {
    productModel.findByIdAndUpdate(req.params.id, req.body).then(resp => {
        res.json(resp);
    })
}
async function deleteProductById(req, res) {
    productModel.findByIdAndDelete(req.params.id).then( resp => {
        res.json(resp);
    })
}

exports.getAllProducts = getAllProducts;
exports.getProductByCategoryId = getProductByCategoryId;
exports.getProductById = getProductById;
exports.addProduct = addProduct;
exports.updateProductById = updateProductById;
exports.deleteProductById = deleteProductById;