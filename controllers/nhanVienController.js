const NhanVienService = require('../service/nhanVienService');

exports.getAllNhanVien = async (req, res) => {
  try {
    const nhanVien = await NhanVienService.getAllNhanVien();
    res.json(nhanVien);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getNhanVienByMSNV = async (req, res) => {
  try {
    const MSNV = req.params.MSNV;
    const nhanVien = await NhanVienService.getNhanVienByMSNV(MSNV);
    if (!nhanVien) {
      return res.status(404).send('Nhân viên không tìm thấy');
    }
    res.json(nhanVien);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createNhanVien = async (req, res) => {
  try {
    const newNhanVien = await NhanVienService.createNhanVien(req.body);
    res.status(201).json(newNhanVien);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateNhanVienByMSNV = async (req, res) => {
  try {
    const MSNV = req.params.MSNV;
    const updatedNhanVien = await NhanVienService.updateNhanVienByMSNV(MSNV, req.body);
    if (!updatedNhanVien) {
      return res.status(404).send('Nhân viên không tìm thấy');
    }
    res.json(updatedNhanVien);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteNhanVienByMSNV = async (req, res) => {
  try {
    const MSNV = req.params.MSNV;
    const deletedNhanVien = await NhanVienService.deleteNhanVienByMSNV(MSNV);
    if (!deletedNhanVien) {
      return res.status(404).send('Nhân viên không tìm thấy');
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};