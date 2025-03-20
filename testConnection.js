const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Lade die Umgebungsvariablen aus der .env Datei
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI is not defined in the .env file');
  process.exit(1);
}

// Verwende die Umgebungsvariable MONGO_URI für die Verbindung zu MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  mongoose.connection.close();
}).catch(err => {
  console.error('Database connection error:', err);
});