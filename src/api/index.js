import axios from 'axios';

const SICKHOST = `http://localhost:4000/sick`;

export const getSearchSicks = async (query) => {
  const { data } = await axios.get(`${SICKHOST}?q=${query}`);
  return data;
};
