const mongoose = require('mongoose');

const datHangSchema = new mongoose.Schema({
  SoDonDH: { type: String, required: true },
  MSKH: { type: String, required: true },
  MSNV: { type: String, required: true },
  NgayDH: { type: Date, required: true },
  NgayGH: { type: Date, required: true },
  TrangthaiDH: { type: String, required: true }
});

const DatHang = mongoose.model('DatHang', datHangSchema,'DatHang');

module.exports = DatHang;