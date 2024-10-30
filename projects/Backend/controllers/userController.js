// import User from "../models/userModel.js";
// import bcrypt from "bcryptjs";
// import jwtTokenFunction from "../jwt/JwtToken.js";
// export const SignUp = async (req, res) => {
//   const { name, email, password, confirmPassword } = req.body;
//   try {
//     if (!name || !email || !password || !confirmPassword) {
//       return res.status(400).json({ error: "All fields are required!" });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ error: "Password do not matches" });
//     }
//     const user = await User.findOne({ email: email });
//     if (user) {
//       return res.status(400).json({ error: "User already registered!" });
//     }
//     //hashing the password
//     const hashPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({
//       name: name,
//       email: email,
//       password: hashPassword,
//     });
//     await newUser.save();
//     if (newUser) {
//       jwtTokenFunction(newUser._id, name, email, res);
//       return res
//         .status(201)
//         .json({ message: "User registered successfully!", newUser });
//     }
//   } catch (error) {
//     console.log("error", error);
//     return res.status(500).json({ error: "Internal server error!" });
//   }
// };


// export const Login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     if (!email || !password) {
//       return res.status(400).json({ error: "All fields are required!" });
//     }
//     const user = await User.findOne({ email });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(400).json({ error: "Invalid user credential!" });
//     }

//     const jwtToken=jwt.sign({userId,name,email},process.env.JwtTokenKEY,{expiresIn:"2d"});
//    res.cookie('jwt', jwtToken, {
//       httpOnly: true,
//       secure: false, // Change to true in production
//       sameSite: 'Strict', // Adjust based on your requirements
//     });

//     return res.status(200).json({
//       message: "User logged in successfully!",
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//     });

//   } catch (error) {
//     console.error("Login error:", error); 
//     return res.status(500).json({ error: "Internal server error!" });
//   }
// };


// export const LogOut = async (req, res) => {
//   try {
//     res.clearCookie("jwt");
//     return res.status(201).json({ message: "User Loged Out successfully!"});
//   } catch (error) {
//     console.log("error", error);
//     return res.status(500).json({ error: "Internal server error!" });
//   }
// };


import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // Make sure to import jwt if using it directly
import jwtTokenFunction from "../jwt/JwtToken.js";

export const SignUp = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  try {
    // Check if all fields are provided
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already registered!" });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Generate JWT and respond
    jwtTokenFunction(newUser._id, newUser.name, newUser.email, res);
    return res.status(201).json({ message: "User registered successfully!", newUser });

  } catch (error) {
    console.error("SignUp error:", error); // Improved logging
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: "Invalid user credentials!" });
    }

    // Generate JWT
    const jwtToken = jwt.sign({ userId: user._id, name: user.name, email: user.email }, process.env.JwtTokenKEY, { expiresIn: "2d" });
    console.log("jwt token is:",jwtToken);
    res.cookie("jwt", jwtToken);
    
    return res.status(200).json({
      message: "User logged in successfully!",
      _id: user._id,
      name: user.name,
      email: user.email,
    });

  } catch (error) {
    console.error("Login error:", error); 
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export const LogOut = async (req, res) => {
  try {
    res.clearCookie("jwt"); // Clear the cookie
    return res.status(200).json({ message: "User logged out successfully!" }); // Changed to status 200
  } catch (error) {
    console.error("Logout error:", error); // Improved logging
    return res.status(500).json({ error: "Internal server error!" });
  }
};

