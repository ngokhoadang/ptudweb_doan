const HinhHH = require('../model/hinhHHModel');

exports.getAllHinhHH = async () => {
  return await HinhHH.find({});
};

exports.getHinhHHByMaHinh = async (MaHinh) => {
  return await HinhHH.findOne({ MaHinh: MaHinh });
};

exports.createHinhHH = async (hinhHHData) => {
  const newHinhHH = new HinhHH(hinhHHData);
  return await newHinhHH.save();
};

exports.updateHinhHHByMaHinh = async (MaHinh, updateData) => {
  return await HinhHH.findOneAndUpdate({ MaHinh: MaHinh }, updateData, { new: true });
};

exports.deleteHinhHHByMaHinh = async (MaHinh) => {
  return await HinhHH.findOneAndDelete({ MaHinh: MaHinh });
};