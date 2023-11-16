const HangHoa = require('../model/hangHoaModel');

exports.getAllHangHoa = async () => {
  return await HangHoa.find({});
};

exports.getHangHoaByMSHH = async (MSHH) => {
  return await HangHoa.findOne({ MSHH: MSHH });
};

exports.createHangHoa = async (hangHoaData) => {
  const newHangHoa = new HangHoa(hangHoaData);
  return await newHangHoa.save();
};

exports.updateHangHoaByMSHH = async (MSHH, updateData) => {
  return await HangHoa.findOneAndUpdate({ MSHH: MSHH }, updateData, { new: true });
};

exports.deleteHangHoaByMSHH = async (MSHH) => {
  return await HangHoa.findOneAndDelete({ MSHH: MSHH });
};
