import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children, serverUrl }) => {
  const [socket, setSocket] = useState(null);
  const [isSocketReady, setIsSocketReady] = useState(false);

  useEffect(() => {
    const newSocket = io(serverUrl);
    console.log("Socket initialized:", newSocket);
    setSocket(newSocket);
    setIsSocketReady(true);

    return () => newSocket.close();
  }, [serverUrl]);

  return (
    <SocketContext.Provider value={socket}>
      {isSocketReady && children}
    </SocketContext.Provider>
  );
};
