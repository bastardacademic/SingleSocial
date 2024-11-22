import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/notifications');
        setNotifications(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      {loading ? <p>Loading...</p> : (
        <ul>
          {notifications.map((note, index) => (
            <li key={index}>{note.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
