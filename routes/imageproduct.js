const express = require("express");
const router = express.Router();
const imageUploadController = require("../controllers/imageProductController");
const multer = require("multer");

// Cấu hình Multer để xử lý tệp tin tải lên
const upload = multer();

// Định nghĩa tuyến đường POST để tải lên hình ảnh và lưu vào cơ sở dữ liệu
router.post("/upload", upload.single("image"), imageUploadController.uploadImage);

module.exports = router;
