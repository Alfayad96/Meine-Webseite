const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/packageRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// API-Routen
app.use('/api', routes);

// Server starten
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});