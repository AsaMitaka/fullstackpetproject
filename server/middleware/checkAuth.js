const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWTSECRET);

      req.userId = decoded._id;
      next();
    } catch (error) {
      return res.status(403).json({
        message: 'U dont have access',
      });
    }
  } else {
    return res.status(403).json({
      message: 'U dont have access',
    });
  }
};

module.exports = checkAuth;
