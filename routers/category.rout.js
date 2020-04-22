const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.control')

router.get('', (req, res) => {
    categoryController.getAllCategory(req, res);
})
router.get('/:id', (req, res) => {
    categoryController.getCategoryById(req, res);
})
router.get('/subcat/:catId', (req, res) => {
    categoryController.getSubcategoyByCatId(req, res);
})
router.post('', (req, res) => {
    categoryController.addCategory(req, res);
})
router.patch('/:id', (req, res) => {
    categoryController.updateCategoryById(req, res);
})
router.delete('/:id', (req, res) => {
    categoryController.deleteCategoryById(req, res);
})

module.exports = router;