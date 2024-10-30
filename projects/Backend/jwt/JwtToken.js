import jwt from "jsonwebtoken";
const jwtTokenFunction=(userId,name,email,res)=>
{
   console.log("from jwtToken.js values received:",userId,name,email,res);
   const jwtToken=jwt.sign({userId,name,email},process.env.JwtTokenKEY,{expiresIn:"2d"});
   res.cookie('jwt', jwtToken, {
      httpOnly: true,
      secure: false, // Change to true in production
      sameSite: 'Strict', // Adjust based on your requirements
    });
    console.log("Set cookie with JWT:", jwtToken);
};
export default jwtTokenFunction;