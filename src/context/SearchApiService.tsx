import React, { createContext, useContext } from 'react';
import { CacheService, GetResultByKeyword } from '../utils/types';

interface ISearchApiService {
  cacheService: CacheService;
  children: React.ReactNode;
}

export interface ISearchApiContext {
  getResultsByKeyword: GetResultByKeyword;
}

const SearchApiContext = createContext<ISearchApiContext>(
  {} as ISearchApiContext,
);

export const useSearchApi = () => useContext(SearchApiContext);

export const SearchApiProvider: React.FC<ISearchApiService> = ({
  cacheService,
  children,
}) => {
  const getResultsByKeyword: GetResultByKeyword =
    cacheService.getResultsByKeyword.bind(cacheService);

  return (
    <SearchApiContext.Provider
      value={{
        getResultsByKeyword,
      }}
    >
      {children}
    </SearchApiContext.Provider>
  );
};
