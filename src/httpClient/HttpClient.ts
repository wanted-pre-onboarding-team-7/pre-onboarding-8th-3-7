import axios, { AxiosRequestConfig, Axios } from 'axios';

export default class HttpClient {
  baseURL: AxiosRequestConfig;
  baseApi: Axios;
  constructor(baseURL: string) {
    this.baseURL = {
      baseURL: baseURL,
    };
    this.baseApi = axios.create(this.baseURL);
  }

  get(endpoint: string): any {
    return this.baseApi.get(endpoint);
  }
}
