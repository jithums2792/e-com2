const orderModel = require('../models/order.model')

exports.getAllOrders = async(req,res)=>{await orderModel.find().then(resp=>res.json(resp)).catch(err=>res.json({err: err}))}
exports.addOrder = async(req,res)=>{const neworder=new orderModel({name:req.body.name,userid:req.body.userid,orders:req.body.orders});await neworder.save().then(resp=>res.json(resp)).catch(err=>res.send(null))}
exports.deleteOrder = async(req,res)=>{await orderModel.findByIdAndDelete(req.params.id).then(resp=>res.json(resp)).catch(err=>res.send(null))}
