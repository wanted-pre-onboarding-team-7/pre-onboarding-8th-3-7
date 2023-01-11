import styles from './SearchResult.module.css';

function SearchResult() {
  // const onKeyDownHandler = (e) => {};
  return (
    <div className={styles.container}>
      <span className={styles.title}>추천 검색어</span>
      <ul role="listbox">
        {[1, 2, 3, 4, 5, 6, 7].map((li) => (
          <li className={styles.listItem} key={li}>
            <span>🔍</span>
            <span>{li}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
