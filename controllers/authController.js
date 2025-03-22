const User = require('../models/User'); 
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs'); 
const crypto = require('crypto'); 
const nodemailer = require('nodemailer'); 
 
// ...existing code... 
 
exports.forgotPassword = async (req, res) =
  const { email } = req.body; 
  try { 
    const user = await User.findOne({ email }); 
    if (!user) { 
      return res.status(400).json({ message: 'User not found' }); 
    } 
 
    const resetToken = crypto.randomBytes(20).toString('hex'); 
    user.resetPasswordToken = resetToken; 
    user.resetPasswordExpires = Date.now() + 3600000; // 1 Stunde 
    await user.save(); 
 
    const transporter = nodemailer.createTransport({ 
      service: 'Gmail', 
      auth: { 
        user: process.env.EMAIL, 
        pass: process.env.EMAIL_PASSWORD, 
      }, 
    }); 
 
    const mailOptions = { 
      to: user.email, 
      from: process.env.EMAIL, 
      subject: 'Password Reset', 
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n 
      Please click on the following link, or paste this into your browser to complete the process:\n\n 
      http://${req.headers.host}/reset/${resetToken}\n\n 
      If you did not request this, please ignore this email and your password will remain unchanged.\n`, 
    }; 
 
    transporter.sendMail(mailOptions, (err) =
      if (err) { 
        return res.status(500).json({ message: 'Error sending email' }); 
      } 
      res.status(200).json({ message: 'Email sent' }); 
    }); 
  } catch (err) { 
    res.status(500).json({ error: err.message }); 
  } 
}; 
 
exports.resetPassword = async (req, res) =
  const { token, newPassword } = req.body; 
  try { 
    const user = await User.findOne({ 
      resetPasswordToken: token, 
      resetPasswordExpires: { $gt: Date.now() }, 
    }); 
 
    if (!user) { 
      return res.status(400).json({ message: 'Invalid or expired token' }); 
    } 
 
    const salt = await bcrypt.genSalt(10); 
    user.password = await bcrypt.hash(newPassword, salt); 
    user.resetPasswordToken = undefined; 
    user.resetPasswordExpires = undefined; 
    await user.save(); 
 
    res.status(200).json({ message: 'Password reset successful' }); 
  } catch (err) { 
    res.status(500).json({ error: err.message }); 
  } 
}; 
