const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

module.exports = router;
