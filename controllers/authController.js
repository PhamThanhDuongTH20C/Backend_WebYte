const User = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// Đăng ký tài khoản
const dotenv = require('dotenv');
dotenv.config();

exports.register = async (req, res) => {
  const { username, password, email, fullname, isAdmin } = req.body;

  try {
    // Kiểm tra xem người dùng đã tồn tại chưa
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Tên người dùng hoặc email đã tồn tại.' });
    }

    // Tạo một người dùng mới
    const newUser = new User({ username, password, email, fullname, isAdmin });

    // Tạo token JWT cho người dùng mới đăng ký
    const token = jwt.sign({ username, isAdmin }, process.env.SECRECKEY, { expiresIn: '1h' });

    newUser.token = token;

    await newUser.save();

    res.status(201).json({ message: 'Đăng ký thành công', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình đăng ký.' });
  }
};
exports.login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Tìm người dùng theo tên đăng nhập
      const user = await User.findOne({ username });
  
      // Kiểm tra xem người dùng tồn tại
      if (!user) {
        return res.status(401).json({ message: 'Tên người dùng không tồn tại.' });
      }
  
      // Kiểm tra mật khẩu
      if (password !== user.password) {
        return res.status(401).json({ message: 'Mật khẩu không đúng.' });
      }
  
      // Tạo token JWT cho người dùng đã đăng nhập
      const token = jwt.sign({ username: user.username, isAdmin: user.isAdmin , id: user.id }, process.env.SECRECKEY, { expiresIn: '1h' });
  
      res.status(200).json({ message: 'Đăng nhập thành công', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình đăng nhập.' });
    }

  };