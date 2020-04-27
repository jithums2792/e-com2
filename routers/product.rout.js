const express = require('express');
const router = express.Router();
const productControl = require('../controllers/product.controller')

router.get('', (req,res) => {
   productControl.getAllProducts(req, res); 
})
router.get('/sort/date/ass', (req, res) => { productControl.sortproductByDateAss(req, res) })
router.get('/sort/date/dis', (req, res) => { productControl.sortproductByDateDis(req, res) })
router.get('/:id', (req,res) => {
   productControl.getProductById(req, res); 
})
router.get('/category/:id', (req, res) => { productControl.getProductByCategoryId(req, res)})
router.get('/:catid/:subcatid', (req, res) => { productControl.getproductByCatIdAndSubcatId(req, res)})

router.post('', (req, res) => {
   productControl.addProduct(req, res);
})
router.patch('/:id', (req, res) => {
   productControl.updateProductById(req, res);
})
router.delete('/:id', (req, res) => {
   productControl.deleteProductById(req, res);
})

module.exports = router;