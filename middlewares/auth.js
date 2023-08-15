const jwt = require('jsonwebtoken');

class AuthorizationMiddleware {
  static auth(...roleCheck) {
    return (req, res, next) => {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
      }

      const token = authHeader.split(' ')[1];
      try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const roleCheckResults = roleCheck.map(check => check(decodedToken));

        if (!roleCheckResults.includes(true)) {
          return res.status(403).json({ message: 'Access forbidden' });
        }

        req.user = decodedToken;
        next();
      } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
      }
    };
  }

  static authAdmin(req, res, next) {
    return AuthorizationMiddleware.auth(token => token.is_admin === true)(req, res, next);
  }

  static authStudent(req, res, next) {
    return AuthorizationMiddleware.auth(token => token.is_student === true)(req, res, next);
  }

  static authViewer(req, res, next) {
    return AuthorizationMiddleware.auth(() => true)(req, res, next);
  }
}

module.exports = AuthorizationMiddleware;
