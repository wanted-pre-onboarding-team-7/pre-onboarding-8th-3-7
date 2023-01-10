import styles from './Home.module.css';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';

function Home() {
  return (
    <div className={styles.container}>
      <span>국내 모든 임상시험 검색하고 온라인으로 참여하기</span>
      <SearchBar />
      <SearchResult />
    </div>
  );
}

export default Home;
