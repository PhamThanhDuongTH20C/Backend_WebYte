const ImageProducts = require("../model/imageproducts"); // Import model ImageProducts

// Controller để tải lên và lưu hình ảnh vào trường urlimage
const uploadImage = async (req, res) => {
  try {
    // Lấy dữ liệu hình ảnh từ multer
    const imageBuffer = req.file.buffer;
    
    // Lưu hình ảnh vào cơ sở dữ liệu và trường urlimage
    const newImageProduct = new ImageProducts({
      urlimage: `data:image/png;base64,${imageBuffer.toString("base64")}`,
    });

    const savedImageProduct = await newImageProduct.save();

    res.json(savedImageProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Lỗi trong quá trình tải lên và lưu hình ảnh" });
  }
};

module.exports = {
  uploadImage,
};
