const express = require('express');
const router = express.Router();
const orderControl = require('../controllers/order.control')

router.get('',(req, res)=>{orderControl.getAllOrders(req,res)})
router.post('',(req,res)=>{orderControl.addOrder(req,res)})
router.delete('/:id',(req,res)=>{orderControl.deleteOrder(req,res)})

module.exports = router;