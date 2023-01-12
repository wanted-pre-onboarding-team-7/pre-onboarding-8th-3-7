import styles from './Home.module.css';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import { useRecoilValue } from 'recoil';
import { isInputFocus } from '../store/atoms';

function Home() {
  const isFocus = useRecoilValue(isInputFocus);
  return (
    <div className={styles.container}>
      <span className={styles.title}>
        국내 모든 임상시험 검색하고 온라인으로 참여하기
      </span>
      <SearchBar />
      {isFocus && <SearchResult />}
    </div>
  );
}

export default Home;
