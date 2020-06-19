const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand.controller')

router.get('/all',(req, res) => {brandController.getbrand(req,res)})
router.post('/create',(req,res)=>{brandController.addbrand(req,res)})
router.patch('/update/:id',(req,res)=>{brandController.updatebrandById(req,res)})
router.delete('/delete/:id',(req,res)=>{brandController.deletebrandById(req,res)})

module.exports = router;