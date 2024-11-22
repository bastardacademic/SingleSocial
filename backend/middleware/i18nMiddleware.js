﻿const i18n = require('i18n');

// Configure i18n
i18n.configure({
  locales: ['en', 'es', 'fr'], // Add more locales as needed
  directory: './locales',
  defaultLocale: 'en',
});

module.exports = (req, res, next) => {
  i18n.init(req, res);
  return next();
};
