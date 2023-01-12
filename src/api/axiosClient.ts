import axios from 'axios';
import { HttpClient } from '../utils/types';

class AxiosClient implements HttpClient {
  instance;
  count;
  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
    this.count = 0;
    this._responseMiddleware();
  }
  _responseMiddleware() {
    this.instance.interceptors.response.use((response) => {
      return response.data.slice(0, 7);
    });
  }
  get(keyword: string) {
    const res = this.instance.get(`?q=${keyword}`);
    this.count++;
    console.info('calling api:' + this.count);
    return res;
  }
}

export default AxiosClient;
