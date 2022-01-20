const router = require('express').Router();
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJs.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString(),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).json({ message: 'Wrong username!' });
      return;
    }
    const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.PASSWORD_SECRET);
    const userPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
    if (userPassword !== req.body.password) {
      res.status(401).json({ message: 'Wrong password!' });
      return;
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '3d' },
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
