const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');

// Création d'une réservation
router.post('/', async (req, res) => {
  const reservation = new Reservation(req.body);
  try {
    await reservation.save();
    res.status(201).send(reservation);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Modification d'une réservation
router.put('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reservation) {
      return res.status(404).send();
    }
    res.send(reservation);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Suppression d'une réservation
router.delete('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) {
      return res.status(404).send();
    }
    res.send(reservation);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;