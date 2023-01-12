import { createContext, useContext } from 'react';
import NetworkService from '../service/NetworkService';

export const NetworkContext = createContext<NetworkService | null>(null);

export const useNetwork = () => useContext(NetworkContext);
