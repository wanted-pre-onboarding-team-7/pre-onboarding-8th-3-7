import axiosClient from './axiosClient';

const BASE_URL: string = 'http://localhost:4000/sick';
const client = new axiosClient(BASE_URL);

export const getResult = (keyword: string) => client.get(`?q=${keyword}`);
