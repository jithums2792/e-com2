const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/banner.controler')

router.get('/all',(req, res) => {bannerController.getBanner(req,res)})
router.post('/create',(req,res)=>{bannerController.addBanner(req,res)})
router.patch('/update/:id',(req,res)=>{bannerController.updateBannerById(req,res)})
router.delete('/delete/:id',(req,res)=>{bannerController.deleteBannerById(req,res)})

module.exports = router;