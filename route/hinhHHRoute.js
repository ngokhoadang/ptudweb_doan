const express = require('express');
const router = express.Router();
const hinhHHController = require('../controllers/hinhHHController');

router.get('/', hinhHHController.getAllHinhHH);
router.get('/:MaHinh', hinhHHController.getHinhHHByMaHinh);
router.post('/create', hinhHHController.createHinhHH);
router.put('/update/:MaHinh', hinhHHController.updateHinhHHByMaHinh);
router.delete('/delete/:MaHinh', hinhHHController.deleteHinhHHByMaHinh);

module.exports = router;