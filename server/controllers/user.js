const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json({ message: 'Cant be empty' });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWTSECRET, { expiresIn: '30d' });
    const { password: passwordHash, ...otherData } = user._doc;

    return res.status(200).json({ ...otherData, token });
  } catch (error) {
    console.log(error);
  }
};

const signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    if (!(email && password && username)) {
      return res.status(400).json({ message: 'Cant be empty' });
    }

    const registeredUser = await User.findOne({ email: email });
    if (registeredUser) {
      return res.status(400).json({ message: 'Registration already' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ email, username, password: hashedPassword });
    const token = jwt.sign({ id: user.id }, process.env.JWTSECRET, { expiresIn: '30d' });
    const { password: passwordHash, ...otherData } = user._doc;

    return res.status(200).json({ ...otherData, token });
  } catch (error) {
    console.log(error);
  }
};

const current = async (req, res) => {
  const user = await User.findById(req.userId);

  if (!user) {
    res.status(404).json({ message: 'User not found' });
  }

  const { password, ...otherData } = user._doc;

  return res.status(200).json({ ...otherData });
};

module.exports = { login, signup, current };
