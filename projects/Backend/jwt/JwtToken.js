import jwt from "jsonwebtoken";
const jwtTokenFunction=(userId,name,email,res)=>
{
   const jwtToken=jwt.sign({userId,name,email},process.env.JwtTokenKEY,{expiresIn:"2d"});
   res.cookie("jwt",jwtToken,{
    httpOnly:true,
    secure:true,
    sameSite:"strict",
   })
};
export default jwtTokenFunction;