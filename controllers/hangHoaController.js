const HangHoaService = require('../service/hangHoaService');

exports.getAllHangHoa = async (req, res) => {
  try {
    const hangHoa = await HangHoaService.getAllHangHoa();
    res.json(hangHoa);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHangHoaByMSHH = async (req, res) => {
  try {
    const MSHH = req.params.MSHH;
    const hangHoa = await HangHoaService.getHangHoaByMSHH(MSHH);
    if (!hangHoa) {
      return res.status(404).send('Hàng hóa không tìm thấy');
    }
    res.json(hangHoa);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createHangHoa = async (req, res) => {
  try {
    const newHangHoa = await HangHoaService.createHangHoa(req.body);
    res.status(201).json(newHangHoa);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateHangHoaByMSHH = async (req, res) => {
  try {
    const MSHH = req.params.MSHH;
    const updatedHangHoa = await HangHoaService.updateHangHoaByMSHH(MSHH, req.body);
    if (!updatedHangHoa) {
      return res.status(404).send('Hàng hóa không tìm thấy');
    }
    res.json(updatedHangHoa);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteHangHoaByMSHH = async (req, res) => {
  try {
    const MSHH = req.params.MSHH;
    const deletedHangHoa = await HangHoaService.deleteHangHoaByMSHH(MSHH);
    if (!deletedHangHoa) {
      return res.status(404).send('Hàng hóa không tìm thấy');
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};