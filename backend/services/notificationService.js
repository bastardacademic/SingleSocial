const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(require('../config/firebase-service-account.json')),
  });
}

const sendNotification = async (tokens, message) => {
  try {
    await admin.messaging().sendMulticast({
      tokens,
      notification: {
        title: message.title,
        body: message.body,
      },
    });
    console.log('Notifications sent successfully');
  } catch (error) {
    console.error('Error sending notifications:', error);
  }
};

module.exports = { sendNotification };
