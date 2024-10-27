import jwt from "jsonwebtoken";
export const getUserData = (req, res) => {
  const token = req.cookies.jwt; 
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  jwt.verify(token, process.env.JwtTokenKEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    const userid = decoded.userId;
    const name = decoded.name;
    const email = decoded.email;
    return res.json({ userid, name, email });
  });
};
