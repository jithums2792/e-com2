const productModel = require('../models/product.model');

async function getAllProducts(req, res) {
    const produts = await productModel.find();
    res.json(produts);
}

async function getProductByCategoryId(req, res){
    await productModel.find({category: req.params.id}).then(resp => { res.json(resp)})
};
async function getProductById(req, res){
const product = await productModel.findById(req.params.id);
res.json(product);
};
async function getproductByCatIdAndSubcatId(req, res) {
    const products = await productModel.find({category: req.params.catid, subcategory: req.params.subcatid});
    res.json(products);
}
async function sortproductByDateAss(req, res) { const produts =await  productModel.find().sort({'createdAt': 1}).then(resp => res.json(resp))  }
async function sortproductByDateDis(req, res) { const produts =await  productModel.find().sort({'createdAt': -1}).limit(4).then(resp => res.json(resp))  }

async function addProduct(req, res) {
    const product = new productModel({
        name: req.body.name,
        image: req.body.image,
        discription: req.body.discription,
        price: req.body.price,
        unit: req.body.unit,
        offerprice: req.body.offerprice,
        badge: req.body.badge,
        badgeclass: req.body.badgeclass,
        category: req.body.category,
        subcategory: req.body.subcategory,
        updatedprice: req.body.updatedprice,
        num: req.body.num,
        quantity: req.body.quantity,
        createdAt: new Date()
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
exports.sortproductByDateAss = sortproductByDateAss;
exports.sortproductByDateDis = sortproductByDateDis;
exports.getProductByCategoryId = getProductByCategoryId;
exports.getProductById = getProductById;
exports.getproductByCatIdAndSubcatId = getproductByCatIdAndSubcatId;
exports.addProduct = addProduct;
exports.updateProductById = updateProductById;
exports.deleteProductById = deleteProductById;