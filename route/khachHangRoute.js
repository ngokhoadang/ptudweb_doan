const express = require('express');
const router = express.Router();
const khachHangController = require('../controllers/khachHangController');

router.get('/', khachHangController.getAllKhachHang);
router.get('/:MSKH', khachHangController.getKhachHangByMSKH);
router.put('/update/:MSKH', khachHangController.updateKhachHangByMSKH);
router.delete('/delete/:MSKH', khachHangController.deleteKhachHangByMSKH);
router.post('/create', khachHangController.createKhachHang);
module.exports = router;