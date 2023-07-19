const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'you dont have permission' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);

    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Is not authorized' });
  }
};

module.exports = auth;
