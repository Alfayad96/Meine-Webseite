const express = require('express');
const router = express.Router();
const Package = require('../models/Package'); // Importiere das Package-Modell

// GET /api/packages - Alle Pakete abrufen
router.get('/', async (req, res) => {
  try {
    const packages = await Package.find(); // Alle Pakete aus der Datenbank abrufen
    res.status(200).json(packages); // Erfolgreiche Antwort mit den Paketen
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Pakete', error });
  }
});

module.exports = router;