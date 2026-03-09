import User from '../models/user.js';
import TryCatch from '../utils/TryCatch.js';


// Create a new user

export const loginUser = TryCatch(async (req, res) => {
    const { name,email, password } = req.body;
    res.json({ message: "User logged in successfully", user: { name, email,password } });
});