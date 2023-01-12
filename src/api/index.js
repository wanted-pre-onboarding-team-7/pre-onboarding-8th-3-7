import axios from 'axios';

const SICKHOST = `http://localhost:4000/sick`;

export const getSearchSicks = async (query, pages = 10) => {
  const { data } = await axios.get(`${SICKHOST}?q=${query}`);
  console.info('calling api');
  return data.slice(0, pages);
};
