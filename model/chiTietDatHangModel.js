const mongoose = require('mongoose');

const chitiet = new mongoose.Schema({
  SoDonDH: String,
  MSHH: String,
  SoLuong: Number,
  GiaDatHang: Number,
  GiamGia: Number
});

module.exports = mongoose.model('ChiTietDatHang', chitiet, 'ChiTietDatHang');