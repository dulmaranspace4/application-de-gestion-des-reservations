const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  utilisateurId: { type: mongoose.Schema.Types.ObjectId, required: true },
  evenementId: { type: mongoose.Schema.Types.ObjectId, required: true },
  dateReservation: { type: Date, default: Date.now },
  status: { type: String, enum: ['confirmée', 'annulée'], default: 'confirmée' }
});

module.exports = mongoose.model('Reservation', reservationSchema);