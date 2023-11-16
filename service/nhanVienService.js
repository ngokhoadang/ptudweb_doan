const NhanVien = require('../model/nhanVienModel');

exports.getAllNhanVien = async () => {
  return await NhanVien.find({});
};

exports.getNhanVienByMSNV = async (MSNV) => {
  return await NhanVien.findOne({ MSNV: MSNV });
};

exports.createNhanVien = async (nhanVienData) => {
  const newNhanVien = new NhanVien(nhanVienData);
  return await newNhanVien.save();
};

exports.updateNhanVienByMSNV = async (MSNV, updateData) => {
  return await NhanVien.findOneAndUpdate({ MSNV: MSNV }, updateData, { new: true });
};

exports.deleteNhanVienByMSNV = async (MSNV) => {
  return await NhanVien.findOneAndDelete({ MSNV: MSNV });
};