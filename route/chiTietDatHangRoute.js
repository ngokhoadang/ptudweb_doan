const express = require('express');
const router = express.Router();
const chiTietDatHangController = require('../controllers/chiTietDatHangController');

// GET request to get all order details
router.get('/', chiTietDatHangController.getAllChiTietDatHang);

// GET request to get a single order detail by ID
router.get('/:id', chiTietDatHangController.getChiTietDatHangById);

// POST request to create a new order detail
router.post('/', chiTietDatHangController.createChiTietDatHang);

// PUT request to update an existing order detail
router.put('/:id', chiTietDatHangController.updateChiTietDatHang);

// DELETE request to delete an existing order detail
router.delete('/:id', chiTietDatHangController.deleteChiTietDatHang);

// GET request to get paginated order details
router.get('/paginate', chiTietDatHangController.getChiTietDatHangPaginated);

// POST request to find order details by a query
router.post('/query', chiTietDatHangController.findChiTietDatHangByQuery);

router.get('/sodondh/:soDonDH', chiTietDatHangController.findChiTietDatHangBySoDonDH);
router.post('/sodondh/create', chiTietDatHangController.createChiTietDatHang);
router.put('/sodondh/update/:soDonDH', chiTietDatHangController.updateChiTietDatHangBySoDonDH);
router.delete('/sodondh/delete/:soDonDH', chiTietDatHangController.deleteChiTietDatHangBySoDonDH);



module.exports = router;