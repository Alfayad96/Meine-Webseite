const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const packageRoutes = require('./routes/packageRoutes'); // Importiere die Package-Routen

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routen
app.use('/api/packages', packageRoutes); // Registriere die Package-Routen

// Verbindung zur MongoDB
mongoose
  .connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB verbunden'))
  .catch((err) => console.error('Fehler beim Verbinden mit MongoDB:', err));

// Server starten
const PORT = 5002;
app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));