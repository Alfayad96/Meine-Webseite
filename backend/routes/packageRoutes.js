const express = require('express');
const router = express.Router();

// Beispielroute: API-Status
router.get('/', (req, res) => {
    res.status(200).json({ message: 'API läuft erfolgreich!' });
});

// Beispielroute: Alle Pakete abrufen
router.get('/packages', (req, res) => {
    const packages = [
        { id: 1, name: 'Basic Package', price: 100 },
        { id: 2, name: 'Premium Package', price: 200 },
        { id: 3, name: 'Enterprise Package', price: 500 },
    ];
    res.status(200).json(packages);
});

// Beispielroute: Ein Paket hinzufügen
router.post('/', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: 'Name und Preis sind erforderlich!' });
    }

    const newPackage = { id: Date.now(), name, price };
    res.status(201).json({ message: 'Paket erfolgreich hinzugefügt!', package: newPackage });
});

module.exports = router;