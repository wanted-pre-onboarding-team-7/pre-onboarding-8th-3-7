import styles from './SearchResult.module.css';

function SearchResult() {
  //TODO: 검색 결과 기능 구현
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <span className={styles.recommandKeyword}>추천 검색어</span>
      </div>
    </div>
  );
}

export default SearchResult;
