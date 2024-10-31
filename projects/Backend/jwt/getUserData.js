import jwt from "jsonwebtoken";

export const getUserData = (req, res) => {
  // console.log(req.headers);
  const token = req.cookies.jwt; 
  console.log(token);

  if (!token) 
  {
    console.log("Token verification error: No token provided",token); // Updated log message
    return res.status(401).json({ error: "No token provided" });
  }
  
  console.log("Token from getUserData.js in jwt folder:", token);
  
  jwt.verify(token, process.env.JwtTokenKEY, (err, decoded) => {
    if (err) {
      console.log("Token verification error:", err); // Log the error
      return res.status(403).json({ error: "Invalid token" });
    }
    
    console.log("Decoded token:", decoded); // Log the decoded token
    const userId = decoded.userId;
    const name = decoded.name;
    const email = decoded.email;
    console.log("Cookie data from getUserData.js in jwt folder:", userId, name, email);
    
    return res.json({ userId, name, email });
  });
};
