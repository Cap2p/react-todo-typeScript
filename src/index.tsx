import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SocketService } from './class/SocketService';
import { ChatContext } from './class/ChatContext';

const chat = new SocketService();


ReactDOM.render(
  <React.StrictMode>
   <ChatContext.Provider value={chat}>
    <App />
  </ChatContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
