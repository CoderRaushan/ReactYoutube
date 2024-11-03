import jwt from "jsonwebtoken";
export const getUserData = (req, res) => 
{
  const token = req.cookies.jwt; 
  if (!token) 
  {
    console.log("Token verification error: No token provided",token);
    return res.status(401).json({ error: "No token provided" });
  }  
  jwt.verify(token, process.env.JwtTokenKEY, (err, decoded) => {
    try
    {
      if (err) {
        console.log("Token verification error:", err); 
        return res.status(403).json({ error: "Invalid token" });
      }
      const userId = decoded.userId;
      const name = decoded.name;
      const email = decoded.email;
      return res.json({ userId, name, email });
    }catch(err)
    {
      return res.status(403).json({ error: "Token varification error:" });
    }
  });
};
