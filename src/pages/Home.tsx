import styles from './Home.module.css';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import { isInputFocus } from '../store/atom';
import { useRecoilValue } from 'recoil';

function Home() {
  const isInputFocusState = useRecoilValue<boolean>(isInputFocus);
  return (
    <div className={styles.container}>
      <span className={styles.title}>국내 모든 임상시험 검색하고</span>
      <span className={styles.title}>온라인으로 참여하기</span>
      <SearchBar />
      <SearchResult />
      {/* {isInputFocusState && <SearchResult />} */}
    </div>
  );
}

export default Home;
