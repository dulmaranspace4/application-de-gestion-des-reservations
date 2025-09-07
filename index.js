const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connecting to MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/reservations', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB database connected!'))
  .catch(err => console.error('Connection error to MongoDB:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});