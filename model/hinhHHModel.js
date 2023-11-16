const mongoose = require('mongoose');

const hinhHHSchema = new mongoose.Schema({
  MaHinh: { type: String, required: true, unique: true },
  TenHinh: { type: String, required: true },
  MSHH: { type: String, required: true }
});

const HinhHH = mongoose.model('HinhHH', hinhHHSchema,'HinhHH');

module.exports = HinhHH;