import React, { useState } from 'react';
import styles from './Home.module.css';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import { useSearchApi } from '../context/SearchApiService';
import { Results } from '../utils/types';

let timer: null | ReturnType<typeof setTimeout> = null;

function debounce(callback: () => void, delay: number) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    callback();
  }, delay);
}

function Home() {
  const [isFocused, setIsfocused] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const [data, setData] = useState<Results>([]);
  const searchApi = useSearchApi();

  const handleFocused = () => {
    setIsfocused(true);
  };

  const handleBlur = () => {
    setIsfocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
    debounce(async () => {
      if (e.target.value === '') return;
      const response = await searchApi.getResultsByKeyword(e.target.value);
      setData(response);
    }, 450);
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
        {isFocused && <SearchResult keyword={keyword} data={data} />}
      </div>
    </div>
  );
}

export default Home;
