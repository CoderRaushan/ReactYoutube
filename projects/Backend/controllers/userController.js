import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
export const SignUp = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  try {
    // Check if all fields are provided
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password do not matches" });
    }
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ error: "User already registered!" });
    }
    //hashing the password
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: hashPassword,
    });
    await newUser.save();
    return res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};
