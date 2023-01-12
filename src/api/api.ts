import axios from 'axios';

const BASE_URL = 'http://localhost:4000/sick';
export const getSearchRecommended = (keyword: string) =>
  axios.get(`${BASE_URL}?q=${keyword}`);
