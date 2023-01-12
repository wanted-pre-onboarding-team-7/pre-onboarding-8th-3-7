import axios from 'axios';

class axiosClient {
  instance;
  count: number;
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
  get(url: string) {
    const res = this.instance.get(url);
    this.count++;
    console.info('calling api:' + this.count);
    return res;
  }
}

export default axiosClient;
