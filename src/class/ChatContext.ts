
// import context APIs and SocketService
import React from 'react';
import { SocketService } from './SocketService';

// create new context
export const ChatContext: React.Context<SocketService> = React.createContext(new SocketService());