const DatHangService  = require('../service/datHangService');

exports.getAllDatHang = async (req, res) => {
  try {
    const datHang = await DatHangService.getAllDatHang();
    res.json(datHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDatHangBySoDonDH = async (req, res) => {
  try {
    const soDonDH = req.params.soDonDH;
    const datHang = await DatHangService.getDatHangBySoDonDH(soDonDH);
    if (!datHang) {
      return res.status(404).send('Đơn Đặt Hàng không tìm thấy');
    }
    res.json(datHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createDatHang = async (req, res) => {
  try {
    const newDatHang = await DatHangService.createDatHang(req.body);
    res.status(201).json(newDatHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDatHangBySoDonDH = async (req, res) => {
  try {
    const soDonDH = req.params.soDonDH;
    const updatedDatHang = await DatHangService.updateDatHangBySoDonDH(soDonDH, req.body);
    if (!updatedDatHang) {
      return res.status(404).send('Đơn Đặt Hàng không tìm thấy');
    }
    res.json(updatedDatHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDatHangBySoDonDH = async (req, res) => {
  try {
    const soDonDH = req.params.soDonDH;
    const deletedDatHang = await DatHangService.deleteDatHangBySoDonDH(soDonDH);
    if (!deletedDatHang) {
      return res.status(404).send('Đơn Đặt Hàng không tìm thấy');
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};