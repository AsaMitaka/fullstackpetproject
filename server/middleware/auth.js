const User = require('../model/userSchema');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWTSECRET);

    const user = await User.findOne(decoded.id);

    if (!user) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Is not authorized' });
  }
};

module.exports = auth;
