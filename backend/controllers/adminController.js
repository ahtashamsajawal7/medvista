import Admin from './../models/adminModel.js';
import jwt from 'jsonwebtoken';

// Register new admin
export const registerAdmin = async (req, res) => {
  const { name, email, cnic, expiryDate, password } = req.body;

  try {
    // Check if admin already exists
    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ success: false, message: 'Admin already exists!' });
    }

    const newAdmin = new Admin({
      name,
      email,
      cnic,
      expiryDate,
      password,
    });

    await newAdmin.save();

    res.status(201).json({
      success: true,
      message: 'Admin account created successfully!',
      data: newAdmin,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error, try again later.' });
  }
};

// Login admin and send JWT token
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ success: false, message: 'Admin not found!' });
    }

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials!' });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expiration time
    });

    res.status(200).json({
      success: true,
      message: 'Login successful!',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error, try again later.' });
  }
};
