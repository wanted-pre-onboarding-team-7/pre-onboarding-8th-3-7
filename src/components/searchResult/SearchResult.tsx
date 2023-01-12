import styles from './SearchResult.module.css';

function SearchResult() {
  //TODO: 검색 결과 기능 구현
  return (
    <div className={styles.container}>
      <div className={styles.subTitle}>추천 검색어</div>
      <ul className={styles.resultBox}>
        {['간세포암', '간담', '간손상', '간 기증', '간기능', '간6', '간7'].map(
          (ele) => (
            <li className={styles.resultList}>
              <span>🔎</span>
              <span>{ele}</span>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default SearchResult;
