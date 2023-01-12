import styles from './SearchResult.module.css';
import searchIcon from '../../images/searchIcon.svg';

function SearchResult({ data,position }) {
  //TODO: 검색 결과 기능 구현
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <span className={styles.recommandKeyword}>추천 검색어</span>
        {data?.map((element, index) => {
          return (
            <div className={position===index?styles.borderContext:styles.result} key={index}>
              <img className={styles.searchIcon} src={searchIcon} alt="" />
              <div
                className={styles.searchTitle}
                dangerouslySetInnerHTML={{ __html: element }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
