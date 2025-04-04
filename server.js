const express = require('express');
const path = require('path');
const app = express();

// Statische Dateien bereitstellen
app.use(express.static(path.join(__dirname, 'assets')));

// HTML-Datei bereitstellen
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Server starten
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});