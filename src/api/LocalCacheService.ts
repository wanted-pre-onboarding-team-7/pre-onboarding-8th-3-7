import { CacheService, HttpClient, Results } from '../utils/types';

export class LocalCacheService implements CacheService {
  _httpClient;
  _cache;
  _keyword = '';
  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
    this._cache = new Map();
  }

  getResultsByKeyword(keyword: string) {
    this._keyword = keyword;
    if (this._isCacheExist()) {
      return this._getCacheResults();
    }
    return this._getApiResult();
  }

  _isCacheExist() {
    return this._cache.has(this._keyword);
  }

  _getCacheResults() {
    return this._cache.get(this._keyword);
  }

  _getApiResult() {
    return this._httpClient.get(this._keyword).then((newResults: Results) => {
      this._cache.set(this._keyword, newResults);
      return newResults;
    });
  }
}
