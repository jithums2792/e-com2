const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controler')

router.get('/get/:id', (req, res) => {
    cartController.getCartById(req, res);
})
router.post('/new/:id', (req, res) => {
    cartController.addToCartById(req, res);
})
router.patch('/update/:id', (req, res) => {
    cartController.updateCartById(req, res);
})

module.exports = router;