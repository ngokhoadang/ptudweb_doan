const express = require('express');
const router = express.Router();
const hangHoaController = require('../controllers/hangHoaController');

router.get('/', hangHoaController.getAllHangHoa);
router.get('/:MSHH', hangHoaController.getHangHoaByMSHH);
router.post('/create', hangHoaController.createHangHoa);
router.put('/update/:MSHH', hangHoaController.updateHangHoaByMSHH);
router.delete('/delete/:MSHH', hangHoaController.deleteHangHoaByMSHH);

module.exports = router;