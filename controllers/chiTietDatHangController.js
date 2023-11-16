const chiTietDatHangService = require('../service/chiTietDatHangService');

exports.getAllChiTietDatHang = async (req, res) => {
  try {
    const chiTietDatHang = await chiTietDatHangService.getAllChiTietDatHang();
    res.json(chiTietDatHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.getChiTietDatHangById = async (req, res) => {
  try {
    const id = req.params.id;
    const chiTietDatHang = await chiTietDatHangService.getChiTietDatHangById(id);
    if (!chiTietDatHang) {
      return res.status(404).send('Chi tiết đặt hàng not found');
    }
    res.json(chiTietDatHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.createChiTietDatHang = async (req, res) => {
  try {
    const newChiTietDatHang = await chiTietDatHangService.createChiTietDatHang(req.body);
    res.status(201).json(newChiTietDatHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.updateChiTietDatHang = async (req, res) => {
  try {
    const updatedChiTietDatHang = await chiTietDatHangService.updateChiTietDatHang(req.params.id, req.body);
    if (!updatedChiTietDatHang) {
      return res.status(404).send('Chi tiết đặt hàng not found');
    }
    res.json(updatedChiTietDatHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.deleteChiTietDatHang = async (req, res) => {
  try {
    const deletedChiTietDatHang = await chiTietDatHangService.deleteChiTietDatHang(req.params.id);
    if (!deletedChiTietDatHang) {
      return res.status(404).send('Chi tiết đặt hàng not found');
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.getChiTietDatHangPaginated = async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;
    const chiTietDatHang = await chiTietDatHangService.getChiTietDatHangPaginated(page, limit);
    res.json(chiTietDatHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
exports.findChiTietDatHangByQuery = async (req, res) => {
  try {
    const query = req.body;
    const chiTietDatHang = await chiTietDatHangService.findChiTietDatHangByQuery(query);
    res.json(chiTietDatHang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findChiTietDatHangBySoDonDH = async (req, res) => {
  try {
    const soDonDH = req.params.soDonDH;
    const result = await chiTietDatHangService.findChiTietDatHangBySoDonDH(soDonDH);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.updateChiTietDatHangBySoDonDH = async (req, res) => {
  try {
    const soDonDH = req.params.soDonDH;
    const updatedRecord = await chiTietDatHangService.updateChiTietDatHangBySoDonDH(soDonDH, req.body);
    if (!updatedRecord) {
      return res.status(404).send('Chi tiết đặt hàng not found');
    }
    res.json(updatedRecord);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteChiTietDatHangBySoDonDH = async (req, res) => {
  try {
    const soDonDH = req.params.soDonDH;
    const deletedRecord = await chiTietDatHangService.deleteChiTietDatHangBySoDonDH(soDonDH);
    if (!deletedRecord) {
      return res.status(404).send('Chi tiết đặt hàng not found');
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};