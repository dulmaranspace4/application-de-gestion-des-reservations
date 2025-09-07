const express = require('express');
const router = express.Router();
const Utilisateur = require('../models/utilisateur');

// Inscription d'un utilisateur
router.post('/inscription', async (req, res) => {
  const utilisateur = new Utilisateur(req.body);
  try {
    await utilisateur.save();
    res.status(201).send(utilisateur);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Connexion d'un utilisateur
router.post('/connexion', async (req, res) => {
  const { email, motDePasse } = req.body;
  try {
    const utilisateur = await Utilisateur.findOne({ email, motDePasse });
    if (!utilisateur) {
      return res.status(401).send('Identifiants invalides');
    }
    res.send(utilisateur);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;