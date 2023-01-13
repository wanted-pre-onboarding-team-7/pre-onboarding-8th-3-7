import React, { useState } from 'react';
import styles from './Home.module.css';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import useKeyboard from '../hooks/useKeyboard';
import { Results } from '../utils/types';
import useSearchKeyword from '../hooks/useSearchKeyword';
import useDebounce from '../hooks/useDebounce';

function Home() {
  const [isFocused, setIsfocused] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const [data, setData] = useState<Results>([]);
  const [currentIndex, ulRef, handleKeyPress, setCurrentIndex] = useKeyboard(
    data.length,
    setKeyword,
  );

  const handleFocused = () => {
    setIsfocused(true);
  };

  const handleBlur = () => {
    setIsfocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
    setCurrentIndex(-1);
  };

  const { debouncedKeyword, isLoading } = useDebounce(keyword, 500);
  useSearchKeyword(debouncedKeyword, setData);

  return (
    <div className={styles.layout}>
      <div className={styles['inner-layout']}>
        <h1 className={styles.title}>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h1>
        <SearchBar
          keyword={keyword}
          onFocus={handleFocused}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        {isFocused && (
          <SearchResult
            keyword={keyword}
            data={data}
            ulRef={ulRef}
            currentIndex={currentIndex}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
