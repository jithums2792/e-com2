const express = require('express');
const router = express.Router();
const userControler = require('../controllers/user.controller')

router.get('', (req, res) => { userControler.getAllUser(req, res)})
router.get('/:id', (req, res) => { userControler.getUserById(req, res)})
router.patch('/cart/:id', (req, res) => userControler.updateCartById(req, res))
router.get('/cart/:id', (req, res) => userControler.getCArtById(req, res))
router.post('', (req,res) => { userControler.addUser(req, res)})
router.patch('/:id', (req, res) => { userControler.editUserById(req, res)})
router.delete('/:id', (req, res) => { userControler.deleteUserById(req, res)})

module.exports = router;