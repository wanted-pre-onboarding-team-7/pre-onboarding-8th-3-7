import React, { useState } from 'react';
import styles from './Home.module.css';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';

function Home() {
  const [isFocused, setIsfocused] = useState<boolean>(false);

  const handleFocused = (e: React.FocusEvent<HTMLInputElement>): void => {
    console.log('포커스');
    setIsfocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    console.log('해제');
    setIsfocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('입력');
  };

  return (
    <div className={styles.layout}>
      <div className={styles['inner-layout']}>
        <h1 className={styles.title}>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h1>
        <SearchBar
          onFocus={handleFocused}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {isFocused && <SearchResult />}
      </div>
    </div>
  );
}

export default Home;
