import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  // const token = req.cookies.token;
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTI2NjM0NDY2NzMxNWUyMmY3NWJkNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MjI2ODk1MzMsImV4cCI6MjMyNzQ4OTUzM30.g7GaAcSnlYAMGESjeHqOe2j3HA7f3AIygYX4MiHjoWc"

  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not Valid!" });
    req.userId = payload.id;

    next();
  });
};
