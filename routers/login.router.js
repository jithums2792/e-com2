const express = require('express');
const router = express.Router();
const userControler = require('../controllers/user.controller')

router.post('', (req, res) => { userControler.loginUser(req, res)})
router.get('/date/now',(req, res) => {
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
res.json({year: year, month: month, day: day})
}) 

module.exports = router;