const mongoose = require('mongoose');

const nhanVienSchema = new mongoose.Schema({
  MSNV: { type: String, required: true, unique: true },
  HoTenNV: { type: String, required: true },
  Password: { type: String, required: true },
  ChucVu: { type: String, required: true },
  DiaChi: { type: String, required: true },
  SoDienThoai: { type: String, required: true }
});

const NhanVien = mongoose.model('NhanVien', nhanVienSchema,'NhanVien');

module.exports = NhanVien;