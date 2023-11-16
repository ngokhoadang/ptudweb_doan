const KhachHang = require('../model/khachHangModel');

exports.getAllKhachHang = async () => {
  return await KhachHang.find({});
};

exports.getKhachHangByMSKH = async (MSKH) => {
  return await KhachHang.findOne({ MSKH: MSKH });
};

exports.updateKhachHangByMSKH = async (MSKH, updateData) => {
  return await KhachHang.findOneAndUpdate({ MSKH: MSKH }, updateData, { new: true });
};

exports.deleteKhachHangByMSKH = async (MSKH) => {
  return await KhachHang.findOneAndDelete({ MSKH: MSKH });
};

exports.createKhachHang = async (khachHangData) => {
    const newKhachHang = new KhachHang(khachHangData);
    return await newKhachHang.save();
  };