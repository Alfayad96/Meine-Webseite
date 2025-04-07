const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const slowDown = require('express-slow-down');

const app = express();

app.use(helmet());
app.use(mongoSanitize());

// Rate Limiting Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minuten
  max: 100, // Limit von 100 Anfragen pro IP
});
app.use(limiter);

// Slow Down Middleware
const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 Minuten
  delayAfter: 100, // Beginne mit der Verlangsamung nach 100 Anfragen
  delayMs: () => 500, // Füge 500ms Verzögerung pro Anfrage hinzu
});
app.use(speedLimiter);

app.use(cors());
app.use(express.json());

module.exports = app;
