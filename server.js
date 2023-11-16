const express = require('express');
const mongoose = require('mongoose');

const chiTietDatHangRoute = require('./route/chiTietDatHangRoute');
const datHangRoute = require('./route/datHangRoute');
const khachHangRoute = require('./route/khachHangRoute');
const nhanVienRoute = require('./route/nhanVienRoute');
const hangHoaRoute = require('./route/hangHoaRoute');
const hinhHHRoute = require('./route/hinhHHRoute');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/QuanLyBanHang');

app.get("/", (req, res) => {
  res.json({message: "Welcom to contact book application."});
})

app.use("/chitiet", chiTietDatHangRoute);
app.use("/dathang", datHangRoute);
app.use("/khachhang", khachHangRoute);
app.use("/nhanvien", nhanVienRoute);
app.use("/hanghoa", hangHoaRoute);
app.use("/hinhhh", hinhHHRoute);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});