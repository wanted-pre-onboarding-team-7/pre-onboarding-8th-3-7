import { AxiosInstance, AxiosResponse } from 'axios';

export interface Result {
  sickCd: string;
  sickNm: string;
}

export type Results = Array<Result>;

export type GetResultByKeyword = (keyword: string) => Results;

export type Cache = Map<string, Results>;

export interface CacheService {
  _httpClient: HttpClient;
  _cache: Cache;
  _keyword: string;
  getResultsByKeyword: GetResultByKeyword;
  _isCacheExist: () => boolean;
  _getCacheResults: () => Results;
  _getApiResult: () => Results;
}

export interface HttpClient {
  instance: AxiosInstance;
  count: number;
  _responseMiddleware: () => void;
  get: (keyword: string) => Promise<AxiosResponse>; //FIXME: 타입 추가
}
