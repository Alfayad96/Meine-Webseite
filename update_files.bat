@echo off
cd c:/Users/mn512/OneDrive/Desktop/website

:: Datei: controllers/authController.js
cd controllers
echo const User = require('../models/User'); > authController.js
echo const jwt = require('jsonwebtoken'); >> authController.js
echo const bcrypt = require('bcryptjs'); >> authController.js
echo const crypto = require('crypto'); >> authController.js
echo const nodemailer = require('nodemailer'); >> authController.js
echo. >> authController.js
echo // ...existing code... >> authController.js
echo. >> authController.js
echo exports.forgotPassword = async (req, res) => { >> authController.js
echo   const { email } = req.body; >> authController.js
echo   try { >> authController.js
echo     const user = await User.findOne({ email }); >> authController.js
echo     if (!user) { >> authController.js
echo       return res.status(400).json({ message: 'User not found' }); >> authController.js
echo     } >> authController.js
echo. >> authController.js
echo     const resetToken = crypto.randomBytes(20).toString('hex'); >> authController.js
echo     user.resetPasswordToken = resetToken; >> authController.js
echo     user.resetPasswordExpires = Date.now() + 3600000; // 1 Stunde >> authController.js
echo     await user.save(); >> authController.js
echo. >> authController.js
echo     const transporter = nodemailer.createTransport({ >> authController.js
echo       service: 'Gmail', >> authController.js
echo       auth: { >> authController.js
echo         user: process.env.EMAIL, >> authController.js
echo         pass: process.env.EMAIL_PASSWORD, >> authController.js
echo       }, >> authController.js
echo     }); >> authController.js
echo. >> authController.js
echo     const mailOptions = { >> authController.js
echo       to: user.email, >> authController.js
echo       from: process.env.EMAIL, >> authController.js
echo       subject: 'Password Reset', >> authController.js
echo       text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n >> authController.js
echo       Please click on the following link, or paste this into your browser to complete the process:\n\n >> authController.js
echo       http://${req.headers.host}/reset/${resetToken}\n\n >> authController.js
echo       If you did not request this, please ignore this email and your password will remain unchanged.\n`, >> authController.js
echo     }; >> authController.js
echo. >> authController.js
echo     transporter.sendMail(mailOptions, (err) => { >> authController.js
echo       if (err) { >> authController.js
echo         return res.status(500).json({ message: 'Error sending email' }); >> authController.js
echo       } >> authController.js
echo       res.status(200).json({ message: 'Email sent' }); >> authController.js
echo     }); >> authController.js
echo   } catch (err) { >> authController.js
echo     res.status(500).json({ error: err.message }); >> authController.js
echo   } >> authController.js
echo }; >> authController.js
echo. >> authController.js
echo exports.resetPassword = async (req, res) => { >> authController.js
echo   const { token, newPassword } = req.body; >> authController.js
echo   try { >> authController.js
echo     const user = await User.findOne({ >> authController.js
echo       resetPasswordToken: token, >> authController.js
echo       resetPasswordExpires: { ^$gt: Date.now() }, >> authController.js
echo     }); >> authController.js
echo. >> authController.js
echo     if (!user) { >> authController.js
echo       return res.status(400).json({ message: 'Invalid or expired token' }); >> authController.js
echo     } >> authController.js
echo. >> authController.js
echo     const salt = await bcrypt.genSalt(10); >> authController.js
echo     user.password = await bcrypt.hash(newPassword, salt); >> authController.js
echo     user.resetPasswordToken = undefined; >> authController.js
echo     user.resetPasswordExpires = undefined; >> authController.js
echo     await user.save(); >> authController.js
echo. >> authController.js
echo     res.status(200).json({ message: 'Password reset successful' }); >> authController.js
echo   } catch (err) { >> authController.js
echo     res.status(500).json({ error: err.message }); >> authController.js
echo   } >> authController.js
echo }; >> authController.js
cd ..

:: Datei: routes/authRoutes.js
cd routes
echo const express = require('express'); > authRoutes.js
echo const { register, login, forgotPassword, resetPassword } = require('../controllers/authController'); >> authRoutes.js
echo. >> authRoutes.js
echo const router = express.Router(); >> authRoutes.js
echo. >> authRoutes.js
echo router.post('/register', register); >> authRoutes.js
echo router.post('/login', login); >> authRoutes.js
echo router.post('/forgot-password', forgotPassword); >> authRoutes.js
echo router.post('/reset-password', resetPassword); >> authRoutes.js
echo. >> authRoutes.js
echo module.exports = router; >> authRoutes.js
cd ..

:: Datei: tests/auth.test.js
cd tests
echo require('dotenv').config(); > auth.test.js
echo const request = require('supertest'); >> auth.test.js
echo const app = require('../app'); >> auth.test.js
echo const mongoose = require('mongoose'); >> auth.test.js
echo const User = require('../models/User'); >> auth.test.js
echo. >> auth.test.js
echo beforeAll(async () => { >> auth.test.js
echo   await mongoose.connect(process.env.MONGO_URI, { >> auth.test.js
echo     useNewUrlParser: true, >> auth.test.js
echo     useUnifiedTopology: true, >> auth.test.js
echo   }); >> auth.test.js
echo }); >> auth.test.js
echo. >> auth.test.js
echo afterAll(async () => { >> auth.test.js
echo   await mongoose.connection.close(); >> auth.test.js
echo }); >> auth.test.js
echo. >> auth.test.js
echo describe('Auth Endpoints', () => { >> auth.test.js
echo   it('should register a new user', async () => { >> auth.test.js
echo     const res = await request(app) >> auth.test.js
echo       .post('/api/auth/register') >> auth.test.js
echo       .send({ >> auth.test.js
echo         username: 'testuser', >> auth.test.js
echo         email: 'testuser@example.com', >> auth.test.js
echo         password: 'password123', >> auth.test.js
echo       }); >> auth.test.js
echo     expect(res.statusCode).toEqual(200); >> auth.test.js
echo     expect(res.body).toHaveProperty('token'); >> auth.test.js
echo   }); >> auth.test.js
echo. >> auth.test.js
echo   it('should login an existing user', async () => { >> auth.test.js
echo     const res = await request(app) >> auth.test.js
echo       .post('/api/auth/login') >> auth.test.js
echo       .send({ >> auth.test.js
echo         email: 'testuser@example.com', >> auth.test.js
echo         password: 'password123', >> auth.test.js
echo       }); >> auth.test.js
echo     expect(res.statusCode).toEqual(200); >> auth.test.js
echo     expect(res.body).toHaveProperty('token'); >> auth.test.js
echo   }); >> auth.test.js
echo. >> auth.test.js
echo   it('should send a forgot password email', async () => { >> auth.test.js
echo     const res = await request(app) >> auth.test.js
echo       .post('/api/auth/forgot-password') >> auth.test.js
echo       .send({ >> auth.test.js
echo         email: 'testuser@example.com', >> auth.test.js
echo       }); >> auth.test.js
echo     expect(res.statusCode).toEqual(200); >> auth.test.js
echo     expect(res.body).toHaveProperty('message', 'Email sent'); >> auth.test.js
echo   }); >> auth.test.js
echo. >> auth.test.js
echo   it('should reset the password', async () => { >> auth.test.js
echo     const user = await User.findOne({ email: 'testuser@example.com' }); >> auth.test.js
echo     const res = await request(app) >> auth.test.js
echo       .post('/api/auth/reset-password') >> auth.test.js
echo       .send({ >> auth.test.js
echo         token: user.resetPasswordToken, >> auth.test.js
echo         newPassword: 'newpassword123', >> auth.test.js
echo       }); >> auth.test.js
echo     expect(res.statusCode).toEqual(200); >> auth.test.js
echo     expect(res.body).toHaveProperty('message', 'Password reset successful'); >> auth.test.js
echo   }); >> auth.test.js
echo }); >> auth.test.js
cd ..

:: Datei: jest.config.js
echo module.exports = { > jest.config.js
echo   testEnvironment: 'node', >> jest.config.js
echo }; >> jest.config.js

:: Datei: .env
echo PORT=5002 > .env
echo MONGO_URI=mongodb+srv://mohammadalfayad96:Mnmn512.@cluster0.dk5av.mongodb.net/mydatabase?retryWrites=true&w=majority >> .env
echo JWT_SECRET="website 1" >> .env
echo EMAIL=your-email@example.com >> .env
echo EMAIL_PASSWORD=your-email-password >> .env

:: Datei: package.json
echo { > package.json
echo   "name": "website", >> package.json
echo   "version": "1.0.0", >> package.json
echo   "description": "", >> package.json
echo   "main": "index.js", >> package.json
echo   "scripts": { >> package.json
echo     "start": "node server.js", >> package.json
echo     "test": "jest" >> package.json
echo   }, >> package.json
echo   "author": "", >> package.json
echo   "license": "ISC", >> package.json
echo   "dependencies": { >> package.json
echo     "bcryptjs": "^2.4.3", >> package.json
echo     "cors": "^2.8.5", >> package.json
echo     "dotenv": "^8.2.0", >> package.json
echo     "express": "^4.17.1", >> package.json
echo     "express-mongo-sanitize": "^2.0.0", >> package.json
echo     "express-rate-limit": "^5.2.6", >> package.json
echo     "express-slow-down": "^1.3.0", >> package.json
echo     "helmet": "^4.1.0", >> package.json
echo     "jsonwebtoken": "^8.5.1", >> package.json
echo     "mongoose": "^5.10.9", >> package.json
echo     "nodemailer": "^6.4.11" >> package.json
echo   }, >> package.json
echo   "devDependencies": { >> package.json
echo     "jest": "^26.6.3", >> package.json
echo     "supertest": "^6.0.1" >> package.json
echo   } >> package.json
echo } >> package.json

:: Installieren Sie die Abhängigkeiten
npm install

:: Führen Sie die Tests aus
npm test
