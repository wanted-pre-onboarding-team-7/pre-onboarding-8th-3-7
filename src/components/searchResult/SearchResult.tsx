import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { IRecommendedList } from '../../\btypes';
import { Searcheyword, stateGetSearch } from '../../store/atoms';
import styles from './SearchResult.module.css';
function SearchResult() {
  //TODO: 검색 결과 기능 구현
  const getSearchList = useRecoilValue<IRecommendedList[]>(stateGetSearch);
  const [getSearchKeyword, setSearchKeyword] = useRecoilState(Searcheyword);
  // console.log(getSearchList, 'xptmxm!!');
  const clickSickList = (sickName: string) => {
    setSearchKeyword(sickName);
  };
  return (
    <div className={styles.container}>
      <div className={styles.subTitle}>추천 검색어</div>
      <ul className={styles.resultBox}>
        {getSearchList.length ? (
          getSearchList.map((sick) => (
            <div
              key={sick.sickCd}
              className={styles.resultList}
              onClick={() => {
                clickSickList(sick.sickNm);
              }}
            >
              <span>🔎</span>
              <span>{sick.sickNm.split(getSearchKeyword)[0]}</span>
              <strong>{getSearchKeyword}</strong>
              <span>{sick.sickNm.split(getSearchKeyword)[1]}</span>
            </div>
          ))
        ) : (
          <li className={styles.resultList}>검색결과가 없습니다.</li>
        )}
      </ul>
    </div>
  );
}

export default SearchResult;
