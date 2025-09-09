// client/src/Socket.js
import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };

    // ✅ Debugging: confirm env variable is being read
    console.log("Connecting to socket at:", process.env.REACT_APP_BACKEND_URL);

    return io(process.env.REACT_APP_BACKEND_URL, options);
};
