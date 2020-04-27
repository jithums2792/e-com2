const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/banner.controler')

router.get('',(req, res) => {bannerController.getBanner(req,res)})
router.post('',(req,res)=>{bannerController.addBanner(req,res)})
router.patch('/:id',(req,res)=>{bannerController.updateBannerById(req,res)})
router.delete('/:id',(req,res)=>{bannerController.deleteBannerById(req,res)})

module.exports = router;