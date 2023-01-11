import { createContext, useContext } from 'react';

const NetworkContext = createContext(null);

export const useNetwork = () => useContext(NetworkContext);

export {};
