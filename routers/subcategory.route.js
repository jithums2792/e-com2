const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategory.control');

router.get('', (req, res) => {
    subcategoryController.getAllSubcategory(req, res);
})
router.get('/:id', (req, res) => {
    subcategoryController.getSubcategoryById(req, res);
})
router.post('', (req, res) => {
    subcategoryController.addSubcategory(req, res);
})
router.patch('/:id', (req, res) => {
    console.log(req.params.id)
    subcategoryController.updateSubcategoryById(req, res);
})
router.delete('/:id', (req, res) => {
    subcategoryController.deleteSubcategoryById(req, res);
})

module.exports = router;