import React, { useRef, useState } from 'react';
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
};

function SearchResult({ keyword, data }: SearchResultProps) {
  const ulRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const handleKeyArrow = (e: React.KeyboardEvent) => {
    if (data.length > 0) {
      switch (e.key) {
        case 'ArrowDown': //키보드 아래 키
          setCurrentIndex(currentIndex + 1);
          if (ulRef.current?.childElementCount === currentIndex + 1)
            setCurrentIndex(0);
          break;
        case 'ArrowUp': //키보드 위에 키
          setCurrentIndex(currentIndex - 1);
          if (currentIndex <= 0) {
            setCurrentIndex(-1);
          }
          break;
        case 'Escape': // esc key를 눌렀을때,
          setCurrentIndex(-1);
          break;
      }
    }
  };

  return (
    <div className={styles.container}>
      {keyword.length ? (
        <SearchKeyword
          data={data}
          ulRef={ulRef}
          currentIndex={currentIndex}
          keyword={keyword}
        />
      ) : (
        <NoSearchKeyword />
      )}
    </div>
  );
}

export default SearchResult;
