import jwt from "jsonwebtoken";
const jwtTokenFunction=(userId,name,email,res)=>
{
   const jwtToken=jwt.sign({userId,name,email},process.env.JwtTokenKEY,{expiresIn:"2d"});
   res.cookie('jwt', jwtToken, {
      maxAge: 24 * 60 * 60 * 1000, 
      httpOnly: true,              
      secure: false,                
      sameSite: 'strict'            
    });
};
export default jwtTokenFunction;