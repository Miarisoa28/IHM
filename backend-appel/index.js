const express = require('express');
const cors = require('cors');
const db = require('./config/db');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test de route de base
app.get('/', (req, res) => {
  res.send('Serveur de cahier d\'appel numérique opérationnel 🚀');
});

// Exemple de route pour vérifier la connexion à la base
app.get('/test-db', (req, res) => {
  db.query('SELECT 1 + 1 AS result', (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur base de données', error: err });
    }
    res.json({ message: 'Connexion réussie à MySQL', data: result });
  });
});

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
