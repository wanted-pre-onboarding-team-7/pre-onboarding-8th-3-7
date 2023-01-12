import { CacheService, HttpClient, Results } from '../utils/types';

export class LocalCacheService implements CacheService {
  httpClient;
  cache;
  keyword = '';
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.cache = new Map();
  }

  getResultsByKeyword(keyword: string) {
    this.keyword = keyword;
    if (this._isCacheExist()) {
      return this._getCacheResults();
    }
    return this._getApiResult();
  }

  _isCacheExist() {
    return this.cache.has(this.keyword);
  }

  _getCacheResults() {
    return this.cache.get(this.keyword);
  }

  _getApiResult() {
    return this.httpClient
      .get(this.keyword)
      .then((newResults: Results) => {
        this.cache.set(this.keyword, newResults);
        return newResults;
      })
      .catch((e: any) => console.log(e));
  }
}
