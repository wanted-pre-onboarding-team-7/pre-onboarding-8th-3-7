import styles from './SearchBar.module.css';
import searchIcon from '../../images/searchIcon.svg';
function SearchBar({word,onChangeWord}) {
  //TODO: 검색창 기능 구현
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <img className={styles.searchIcon} src={searchIcon} alt="" />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="질환명을 입력해 주세요."
          onChange = {onChangeWord}
          value={word}
        />
      </div>
      <div className={styles.searchButton}>검색</div>
    </div>
  );
}

export default SearchBar;
