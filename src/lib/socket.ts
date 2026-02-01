import { io, Socket } from "socket.io-client";
import { getSocketURL } from "@/lib/config";

let socket: Socket | null = null;

/**
 * Initialize Socket.IO connection
 */
export const initializeSocket = (): Socket => {
  if (socket?.connected) {
    return socket;
  }

  const socketUrl = getSocketURL();

  socket = io(socketUrl, {
    // transports: ['websocket', 'polling'],
    withCredentials: true,
    autoConnect: true,
  });

  socket.on("connect", () => {
    console.log("✅ Socket.IO connected:");
  });

  socket.on("disconnect", (reason) => {
    console.log("❌ Socket.IO disconnected:");
  });

  socket.on("connect_error", (error) => {
    console.error("❌ Socket.IO connection error:");
  });

  return socket;
};

/**
 * Get the current socket instance
 */
export const getSocket = (): Socket | null => {
  return socket;
};

/**
 * Disconnect the socket
 */
export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

/**
 * Check if socket is connected
 */
export const isSocketConnected = (): boolean => {
  return socket?.connected || false;
};
