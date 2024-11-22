const express = require('express');
const passport = require('passport');

const router = express.Router();

// OAuth login for a platform (e.g., Facebook, Twitter)
router.get('/login/:platform', (req, res) => {
  const { platform } = req.params;
  if (platform === 'facebook') {
    return res.redirect('/auth/facebook');
  }
  if (platform === 'twitter') {
    return res.redirect('/auth/twitter');
  }
  res.status(400).send('Platform not supported');
});

// Callback for OAuth
router.get('/callback/:platform', async (req, res) => {
  const { platform } = req.params;
  const code = req.query.code;

  if (!code) {
    return res.status(400).send('Authorization code is required');
  }

  try {
    const token = await getTokenFromPlatform(platform, code);
    res.json({ platform, token });
  } catch (error) {
    res.status(500).send('Error authenticating with platform');
  }
});

module.exports = router;
