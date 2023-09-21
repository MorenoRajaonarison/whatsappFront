import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => {
    return useContext(SocketContext);
};

export const SocketProvider = ({ children, serverUrl }) => {
    const [socket, setSocket] = useState();

    useEffect(() => {
        // Initialisation du socket
        const newSocket = io(serverUrl);
        setSocket(newSocket);

        // Fermeture de la connexion lorsque le composant est démonté
        return () => newSocket.close();
    }, [serverUrl]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

