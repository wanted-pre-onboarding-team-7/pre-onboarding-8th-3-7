import styles from './App.module.css';
import SearchBar from './component/searchBar/SearchBar';
import SearchResult from './component/searchResult/SearchResult';

function App() {
  return (
    <div className={styles.container}>
      <span>국내 모든 임상시험 검색하고 온라인으로 참여하기</span>
      <SearchBar />
      <SearchResult />
    </div>
  );
}

export default App;
