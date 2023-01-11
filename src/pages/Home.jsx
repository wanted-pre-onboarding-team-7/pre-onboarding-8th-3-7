import styles from './Home.module.css';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import useSearch from '../hooks/useSearch';
import { useEffect, useState } from 'react';
import { bold } from '../utils/bold';

function Home() {
  const { word, list, onChangeWord } = useSearch();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (word) {
      const searchArray = list.slice(0,7)
      const boldData = bold(word,searchArray)
      setData(boldData);
    }
  }, [list]);

  return (
    <div className={styles.container}>
      <span className={styles.mainText}>
        국내 모든 임상시험 검색하고 온라인으로 참여하기
      </span>
      <SearchBar word={word} onChangeWord={onChangeWord} />
      <SearchResult word={word} data={data} list={list} />
    </div>
  );
}

export default Home;