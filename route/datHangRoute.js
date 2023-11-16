const express = require('express');
const router = express.Router();
const datHangController = require('../controllers/datHangController');

// GET request to get all order details


router.get('/', datHangController.getAllDatHang);
router.get('/:soDonDH', datHangController.getDatHangBySoDonDH);
router.post('/create', datHangController.createDatHang);
router.put('/update/:soDonDH', datHangController.updateDatHangBySoDonDH);
router.delete('/delete/:soDonDH', datHangController.deleteDatHangBySoDonDH);

module.exports = router;