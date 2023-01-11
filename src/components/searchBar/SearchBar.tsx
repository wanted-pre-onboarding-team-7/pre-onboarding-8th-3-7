import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label className={styles.searchLabel} htmlFor="search">
          🔍
        </label>
        <input className={styles.searchInput} id="search" type="text" />
        <input className={styles.submitBtn} type="submit" value="검색" />
      </form>
    </div>
  );
}

export default SearchBar;
