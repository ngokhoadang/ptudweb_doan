const express = require('express');
const router = express.Router();
const nhanVienController = require('../controllers/nhanVienController');

router.get('/', nhanVienController.getAllNhanVien);
router.get('/:MSNV', nhanVienController.getNhanVienByMSNV);
router.post('/create', nhanVienController.createNhanVien);
router.put('/update/:MSNV', nhanVienController.updateNhanVienByMSNV);
router.delete('/delete/:MSNV', nhanVienController.deleteNhanVienByMSNV);

module.exports = router;