import styles from './SearchBar.module.css';

function SearchBar() {
  //TODO: 검색창 기능 구현
  return (
    <div className={styles.container}>
      <div className={styles.searchIcon}>🔍</div>
      <input className={styles.searchInput} type="text"></input>
      <div className={styles.searchButton}>검색</div>
    </div>
  );
}

export default SearchBar;
