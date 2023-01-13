import React from 'react';
import styles from './SearchResult.module.css';
import NoSearchKeyword from './NoSearchKeyword';
import SearchKeyword from './SearchKeyword';

export type dataType = {
  sickCd: string;
  sickNm: string;
};

type SearchResultProps = {
  keyword: string;
  data: dataType[];
  ulRef: React.RefObject<HTMLUListElement>;
  currentIndex: number;
  isLoading: boolean;
};

function SearchResult({
  keyword,
  data,
  ulRef,
  currentIndex,
  isLoading,
}: SearchResultProps) {
  return (
    <div className={styles.container}>
      {keyword.length ? (
        <SearchKeyword
          data={data}
          ulRef={ulRef}
          currentIndex={currentIndex}
          keyword={keyword}
          isLoading={isLoading}
        />
      ) : (
        <NoSearchKeyword />
      )}
    </div>
  );
}

export default SearchResult;
