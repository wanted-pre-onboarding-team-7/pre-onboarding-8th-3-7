import styles from './SearchResult.module.css';
import searchIcon from '../../images/searchIcon.svg';

function SearchResult({ list, word }) {
  //TODO: 검색 결과 기능 구현
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <span className={styles.recommandKeyword}>추천 검색어</span>
        {list?.map((element, index) => {
              if(index<7)
          return (
            <div className={styles.result} key={index}>
              <img className={styles.searchIcon} src={searchIcon} alt=""/>
              <div className={styles.searchTitle}>{element.sickNm} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
