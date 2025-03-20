const Package = require('../models/Package');

exports.createPackage = async (req, res) => {
  const package = new Package(req.body);
  await package.save();
  res.status(201).send('Package created');
};

exports.getPackages = async (req, res) => {
  const packages = await Package.find();
  res.json(packages);
};