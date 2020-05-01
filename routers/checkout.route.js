const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkout.controler')

router.post('/order', (req,res) => {checkoutController.creatOrder(req, res) })
router.get('/payment/:id', (req, res) => {checkoutController.fetchPayment(req,res)})



module.exports = router;