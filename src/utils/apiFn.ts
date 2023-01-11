import axios from 'axios';
import { InputValue } from '../store/atom';

export const getSearchResults = (keyword: InputValue) => {
  const result = axios({
    url: `http://localhost:4000/sick?q=${keyword}`, // 통신할 웹문서
    method: 'get',
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};
