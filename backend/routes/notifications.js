const express = require('express');
const { sendNotification } = require('../services/notificationService');
const router = express.Router();

router.post('/send', async (req, res) => {
  const { tokens, message } = req.body;

  if (!tokens || !message) {
    return res.status(400).json({ error: 'Tokens and message are required' });
  }

  try {
    await sendNotification(tokens, message);
    res.status(200).send('Notifications sent successfully');
  } catch (error) {
    res.status(500).send('Error sending notifications');
  }
});

module.exports = router;
