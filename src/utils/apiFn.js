import axios from 'axios';

export const getSearchResult = async (keyword) => {
  const result = axios({
    url: `http://localhost:4000/sick?q=${keyword}`, // 통신할 웹문서
    method: 'get',
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};
