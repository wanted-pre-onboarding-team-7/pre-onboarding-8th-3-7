import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AxiosClient from './api/AxiosClient';
import { SearchApiProvider } from './context/SearchApiService';
import { LocalCacheService } from './api/LocalCacheService';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const BASE_URL: string = 'http://localhost:4000/sick';
const httpClient = new AxiosClient(BASE_URL);
const cacheService = new LocalCacheService(httpClient);

root.render(
  <React.StrictMode>
    <SearchApiProvider cacheService={cacheService}>
      <App />
    </SearchApiProvider>
  </React.StrictMode>,
);
