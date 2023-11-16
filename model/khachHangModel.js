const mongoose = require('mongoose');

const khachHangSchema = new mongoose.Schema({
  MSKH: { type: String, required: true, unique: true },
  HoTenKH: { type: String, required: true },
  Password: { type: String, required: true },
  DiaChi: { type: String, required: true },
  SoDienThoai: { type: String, required: true }
});

const KhachHang = mongoose.model('KhachHang', khachHangSchema,'KhachHang');

module.exports = KhachHang;