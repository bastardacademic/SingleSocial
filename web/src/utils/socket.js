import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

export const subscribeToUpdates = (callback) => {
  socket.on('update', (message) => {
    callback(message);
  });
};

export const sendMessage = (message) => {
  socket.emit('message', message);
};

export default socket;
