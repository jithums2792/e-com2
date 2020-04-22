const express = require('express');
const router = express.Router();
const attributeController = require('../controllers/attribute.controller');

router.get('', (req, res) => {
    attributeController.getAllAttribute(req, res);
})
router.get('/:id', (req, res) => {
    attributeController.getAttributeById(req, res);
})
router.post('', (req, res) => {
    attributeController.addAttribute(req, res);
})
router.patch('/:id', (req, res) => {
    attributeController.updateAttributeById(req, res);
})
router.delete('/:id', (req, res) => {
    attributeController.deleteAttributeById(req, res);
})

module.exports = router;