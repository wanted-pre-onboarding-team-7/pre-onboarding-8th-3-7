import styles from './Home.module.css';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import { useState } from 'react';
import { IsInputFocus } from '../utils/type';

function Home() {
  const [isInputFocus, setIsInputFocus] = useState<IsInputFocus>(false);

  return (
    <div className={styles.container}>
      <span className={styles.title}>국내 모든 임상시험 검색하고</span>
      <span className={styles.title}>온라인으로 참여하기</span>
      <SearchBar setIsInputFocus={setIsInputFocus} />
      {isInputFocus && <SearchResult />}
    </div>
  );
}

export default Home;
