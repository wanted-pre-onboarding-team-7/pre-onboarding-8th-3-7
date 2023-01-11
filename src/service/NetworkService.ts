import axios from 'axios';

export default class NetworkServie {
  baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  search(keyword: string) {
    axios.get(`/sick?q=${keyword}`).then(console.log);
  }
}
