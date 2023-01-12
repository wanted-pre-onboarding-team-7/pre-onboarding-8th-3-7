import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import { useNetwork } from '../context/NetworkContext';
import { cachingData } from '../utils/DataCaching';

let cachedRequest: (keyword: string) => Promise<any>;
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
  const [data, setData] = useState([]);
  const Api = useNetwork();

  const requestData = async (keyword: string) => {
    const response = await Api!.search(keyword);
    const data = await response.data;

    return data;
  };

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
      const response = await cachedRequest(e.target.value);
      setData(response);
      console.info('calling api');
    }, 450);
  };

  useEffect(() => {
    cachedRequest = cachingData(requestData);
  }, []);

  // 할 거
  // 키보드로 검색어 이동

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
