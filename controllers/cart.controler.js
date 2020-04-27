const cartModel = require('../models/cart.model');

async function getCartById(req, res) {
    const newCart = await cartModel.findOne({userid: req.params.id})
    res.json(newCart);
}
async function addToCartById(req, res) {
    const Cart = new cartModel({
        userid: req.params.id,
        products: req.body.products
    });
    await Cart.save();
    res.json(Cart);
}
async function updateCartById(req, res) {
   let cart = await cartModel.findOne({userid: req.params.id});
   cart.products.push(req.body.products);
   let upCart = await cartModel.findOneAndUpdate({userid: req.params.id}, cart, {new: true});
   res.json(upCart);
};
async function deleteCartById(req, res) {
    let cart = await cartModel.findOne({userid: req.params.id});
    
}

exports.getCartById = getCartById;
exports.addToCartById = addToCartById;
exports.updateCartById = updateCartById;
