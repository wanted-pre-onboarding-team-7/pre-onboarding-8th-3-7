import { useRecoilValue } from 'recoil';
import { IRecommendedList } from '../../\btypes';
import { Searcheyword, stateGetSearch } from '../../store/atoms';
import styles from './SearchResult.module.css';
function SearchResult() {
  //TODO: 검색 결과 기능 구현
  const getSearchList = useRecoilValue<IRecommendedList[]>(stateGetSearch);
  const getSearchKeyword = useRecoilValue(Searcheyword);
  // console.log(getSearchList, 'xptmxm!!');
  return (
    <div className={styles.container}>
      <div className={styles.subTitle}>추천 검색어</div>
      <ul className={styles.resultBox}>
        {getSearchList.length ? (
          getSearchList.map((sick) => (
            <li className={styles.resultList}>
              <span>🔎</span>
              <span>{sick.sickNm.split(getSearchKeyword)[0]}</span>
              <strong>{getSearchKeyword}</strong>
              <span>{sick.sickNm.split(getSearchKeyword)[1]}</span>
            </li>
          ))
        ) : (
          <li className={styles.resultList}>검색결과가 없습니다.</li>
        )}
      </ul>
    </div>
  );
}

export default SearchResult;
