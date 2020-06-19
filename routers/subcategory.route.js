const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategory.control');

router.get('/all', (req, res) => {
    subcategoryController.getAllSubcategory(req, res);
})
router.get('/subcategory/:id', (req, res) => {
    subcategoryController.getSubcategoryById(req, res);
})
router.get('/category/:name',(req,res) => {subcategoryController.getAllSubcategoryBycatname(req,res)})
router.post('/create', (req, res) => {
    subcategoryController.addSubcategory(req, res);
})
router.patch('/update/:id', (req, res) => {
    console.log(req.params.id)
    subcategoryController.updateSubcategoryById(req, res);
})
router.delete('/delete/:id', (req, res) => {
    subcategoryController.deleteSubcategoryById(req, res);
})

module.exports = router;