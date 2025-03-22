require('dotenv').config(); 
const request = require('supertest'); 
const app = require('../app'); 
const mongoose = require('mongoose'); 
const User = require('../models/User'); 
 
beforeAll(async () =
  await mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  }); 
}); 
 
afterAll(async () =
  await mongoose.connection.close(); 
}); 
 
describe('Auth Endpoints', () =
  it('should register a new user', async () =
    const res = await request(app) 
      .post('/api/auth/register') 
      .send({ 
        username: 'testuser', 
        email: 'testuser@example.com', 
        password: 'password123', 
      }); 
    expect(res.statusCode).toEqual(200); 
    expect(res.body).toHaveProperty('token'); 
  }); 
 
  it('should login an existing user', async () =
    const res = await request(app) 
      .post('/api/auth/login') 
      .send({ 
        email: 'testuser@example.com', 
        password: 'password123', 
      }); 
    expect(res.statusCode).toEqual(200); 
    expect(res.body).toHaveProperty('token'); 
  }); 
 
  it('should send a forgot password email', async () =
    const res = await request(app) 
      .post('/api/auth/forgot-password') 
      .send({ 
        email: 'testuser@example.com', 
      }); 
    expect(res.statusCode).toEqual(200); 
    expect(res.body).toHaveProperty('message', 'Email sent'); 
  }); 
 
  it('should reset the password', async () =
    const user = await User.findOne({ email: 'testuser@example.com' }); 
    const res = await request(app) 
      .post('/api/auth/reset-password') 
      .send({ 
        token: user.resetPasswordToken, 
        newPassword: 'newpassword123', 
      }); 
    expect(res.statusCode).toEqual(200); 
    expect(res.body).toHaveProperty('message', 'Password reset successful'); 
  }); 
}); 
