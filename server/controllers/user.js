const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(403).json({ message: 'Username or password is empty' });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(403).json({ message: 'User does not exist' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(403).json({ message: 'email or username is incorrect' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWTSECRET);
    const { password: pass, ...otherData } = user._doc;

    return res.status(200).json({ token, ...otherData });
  } catch (err) {
    console.warn(err);
    return res.status(404).json({ message: 'Error logging in' });
  }
};

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!(username && email && password)) {
      return res.status(403).json({ message: 'Username or email or password is empty' });
    }

    if (username.length < 5 || username.length > 15) {
      return res.status(403).json({ message: 'Username is too long or too short' });
    }

    if (password.length < 5 || password.length > 15) {
      return res.status(403).json({ message: 'Password is too long or too short' });
    }

    const isUser = await User.findOne({ email: email });
    if (isUser) {
      return res.status(403).json({ message: 'User already exists' });
    }

    const genSalt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, genSalt);

    const user = await User.create({
      username,
      email,
      password: passwordHashed,
      //   avatarUrl?: req.body.avatarUrl,
    });

    const { password: pass, ...otherData } = user._doc;
    const token = jwt.sign({ _id: user._id }, process.env.JWTSECRET);

    return res.status(200).json({ token, ...otherData });
  } catch (err) {
    console.warn(err);
    return res.status(404).json({ message: 'Error signup' });
  }
};

const me = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(403).json({ message: 'User not found' });
    }

    const { password, ...otherData } = user._doc;

    res.json({
      ...otherData,
    });
  } catch (err) {
    console.warn(err);
    return res.status(500).json({ message: 'Error token' });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate('post');

    if (!user) {
      return res.status(403).json({ message: 'User not found' });
    }

    const { password, ...otherData } = user._doc;

    res.json({
      ...otherData,
    });
  } catch (err) {
    console.warn(err);
    return res.status(500).json({ message: 'Error getting user' });
  }
};

module.exports = { login, signup, me, getUser };
