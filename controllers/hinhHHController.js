const HinhHHService = require('../service/hinhHHService');

exports.getAllHinhHH = async (req, res) => {
  try {
    const hinhHH = await HinhHHService.getAllHinhHH();
    res.json(hinhHH);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHinhHHByMaHinh = async (req, res) => {
  try {
    const MaHinh = req.params.MaHinh;
    const hinhHH = await HinhHHService.getHinhHHByMaHinh(MaHinh);
    if (!hinhHH) {
      return res.status(404).send('Hình ảnh không tìm thấy');
    }
    res.json(hinhHH);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createHinhHH = async (req, res) => {
  try {
    const newHinhHH = await HinhHHService.createHinhHH(req.body);
    res.status(201).json(newHinhHH);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateHinhHHByMaHinh = async (req, res) => {
  try {
    const MaHinh = req.params.MaHinh;
    const updatedHinhHH = await HinhHHService.updateHinhHHByMaHinh(MaHinh, req.body);
    if (!updatedHinhHH) {
      return res.status(404).send('Hình ảnh không tìm thấy');
    }
    res.json(updatedHinhHH);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteHinhHHByMaHinh = async (req, res) => {
  try {
    const MaHinh = req.params.MaHinh;
    const deletedHinhHH = await HinhHHService.deleteHinhHHByMaHinh(MaHinh);
    if (!deletedHinhHH) {
      return res.status(404).send('Hình ảnh không tìm thấy');
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};