// routes/index.js
const express = require('express');
const router = express.Router();
const priceService = require('../services/priceService');

router.post('/calculate-price', async (req, res) => {
  try {
    const { organization_id, zone, total_distance, item_type } = req.body;
    const totalPrice = await priceService.calculatePrice(organization_id, zone, total_distance, item_type);
    res.json({ total_price: totalPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
