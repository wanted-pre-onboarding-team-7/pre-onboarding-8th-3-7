import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NetworkContext } from './context/NetworkContext';
import NetworkService from './service/NetworkService';
import HttpClient from './httpClient/HttpClient';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const httpClient = new HttpClient('http://localhost:4000');
const Api = new NetworkService(httpClient);

root.render(
  <React.StrictMode>
    <NetworkContext.Provider value={Api}>
      <App />
    </NetworkContext.Provider>
  </React.StrictMode>,
);
