const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/reservations', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Base de données MongoDB connectée !'))
  .catch(err => console.error('Erreur de connexion à MongoDB :', err));

// Début du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
