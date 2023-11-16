const KhachHangService = require('../service/khachHangService');

exports.getAllKhachHang = async (req, res) => {
  try {
    const khachHang = await KhachHangService.getAllKhachHang();
    res.json(khachHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getKhachHangByMSKH = async (req, res) => {
  try {
    const MSKH = req.params.MSKH;
    const khachHang = await KhachHangService.getKhachHangByMSKH(MSKH);
    if (!khachHang) {
      return res.status(404).send('Khách hàng không tìm thấy');
    }
    res.json(khachHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateKhachHangByMSKH = async (req, res) => {
  try {
    const MSKH = req.params.MSKH;
    const updatedKhachHang = await KhachHangService.updateKhachHangByMSKH(MSKH, req.body);
    if (!updatedKhachHang) {
      return res.status(404).send('Khách hàng không tìm thấy');
    }
    res.json(updatedKhachHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteKhachHangByMSKH = async (req, res) => {
  try {
    const MSKH = req.params.MSKH;
    const deletedKhachHang = await KhachHangService.deleteKhachHangByMSKH(MSKH);
    if (!deletedKhachHang) {
      return res.status(404).send('Khách hàng không tìm thấy');
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createKhachHang = async (req, res) => {
    try {
      const newKhachHang = await KhachHangService.createKhachHang(req.body);
      res.status(201).json(newKhachHang);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };