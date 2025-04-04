const Package = require('../models/Package');

exports.createPackage = (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: 'Name und Preis sind erforderlich!' });
    }

    const newPackage = { id: Date.now(), name, price };
    res.status(201).json({ message: 'Paket erfolgreich hinzugefügt!', package: newPackage });
};

exports.getPackages = async (req, res) => {
  const packages = await Package.find();
  res.json(packages);
};