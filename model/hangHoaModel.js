const mongoose = require('mongoose');

const hangHoaSchema = new mongoose.Schema({
  MSHH: { type: String, required: true, unique: true },
  TenHH: { type: String, required: true },
  MoTaHH: { type: String, required: true },
  Gia: { type: Number, required: true },
  SoLuongHang: { type: Number, required: true },
  GhiChu: { type: String }
});

const HangHoa = mongoose.model('HangHoa', hangHoaSchema,'HangHoa');

module.exports = HangHoa;