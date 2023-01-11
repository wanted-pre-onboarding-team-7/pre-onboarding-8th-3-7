import styles from './SearchBar.module.css';

function SearchBar() {
  //TODO: 검색창 기능 구현
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.barInput}
        placeholder="질환명을 입력해 주세요"
      ></input>
      <button type="button" className={styles.barBtn}></button>
    </div>
  );
}

export default SearchBar;
