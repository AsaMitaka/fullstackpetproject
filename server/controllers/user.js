const bcrypt = require('bcrypt');
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
    return res.status.json({ id: user.id, username, email: user.email, token });
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
    return res.status(200).json({ id: user.id, email: user.email, username, token });
  } catch (error) {
    console.log(error);
  }
};

const current = async (req, res) => {
  return res.status(200).json(req.user);
};

module.exports = { login, signup, current };
