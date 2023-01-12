import { AxiosResponse } from 'axios';

type HttpClient = {
  get: (endpoint: string) => AxiosResponse;
};

export default class NetworkService {
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  search(keyword: string): AxiosResponse {
    return this.httpClient.get(`/sick?q=${keyword}`);
  }
}
