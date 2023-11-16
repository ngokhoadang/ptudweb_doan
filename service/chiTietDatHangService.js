const ChiTietDatHang = require('../model/chiTietDatHangModel'); // Mongoose model for ChiTietDatHang

exports.getAllChiTietDatHang = async () => {
  return await ChiTietDatHang.find({});
};
exports.getChiTietDatHangById = async (id) => {
  return await ChiTietDatHang.findById(id);
};

exports.updateChiTietDatHang = async (id, chiTietData) => {
  return await ChiTietDatHang.findByIdAndUpdate(id, chiTietData, { new: true });
};
exports.deleteChiTietDatHang = async (id) => {
  return await ChiTietDatHang.findByIdAndDelete(id);
};
exports.getChiTietDatHangPaginated = async (page, limit) => {
  const options = {
    page: parseInt(page, 10) || 1,
    limit: parseInt(limit, 10) || 10,
  };
  return await ChiTietDatHang.paginate({}, options);
};
exports.findChiTietDatHangByQuery = async (query) => {
  return await ChiTietDatHang.find(query);
};
exports.findChiTietDatHangBySoDonDH = async (soDonDH) => {
  return await ChiTietDatHang.find({ SoDonDH: soDonDH });
};
exports.createChiTietDatHang = async (chiTietData) => {
  const newChiTiet = new ChiTietDatHang({
    SoDonDH: chiTietData.SoDonDH,
    MSHH: chiTietData.MSHH,
    SoLuong: chiTietData.SoLuong,
    GiaDatHang: chiTietData.GiaDatHang,
    GiamGia: chiTietData.GiamGia
  });
  return await newChiTiet.save();
};

exports.updateChiTietDatHangBySoDonDH = async (soDonDH, updateData) => {
  return await ChiTietDatHang.findOneAndUpdate({ SoDonDH: soDonDH }, updateData, { new: true });
};
exports.deleteChiTietDatHangBySoDonDH = async (soDonDH) => {
  return await ChiTietDatHang.findOneAndDelete({ SoDonDH: soDonDH });
};