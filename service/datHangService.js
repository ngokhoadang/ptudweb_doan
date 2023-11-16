const DatHang = require('../model/datHangModel'); // Mongoose model for ChiTietDatHang

exports.getAllDatHang = async () => {
  return await DatHang.find({});
};

exports.getDatHangBySoDonDH = async (soDonDH) => {
  return await DatHang.findOne({ SoDonDH: soDonDH });
};

exports.createDatHang = async (datHangData) => {
  const newDatHang = new DatHang(datHangData);
  return await newDatHang.save();
};

exports.updateDatHangBySoDonDH = async (soDonDH, updateData) => {
  return await DatHang.findOneAndUpdate({ SoDonDH: soDonDH }, updateData, { new: true });
};

exports.deleteDatHangBySoDonDH = async (soDonDH) => {
  return await DatHang.findOneAndDelete({ SoDonDH: soDonDH });
};