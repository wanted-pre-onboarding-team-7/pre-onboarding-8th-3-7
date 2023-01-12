import React, { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { IRecommendedList } from '../../\btypes';
import {
  Searcheyword,
  selectFocus,
  stateGetSearch,
  stateIsLoading,
} from '../../store/atoms';
import Loading from '../Loading';
import styles from './SearchResult.module.css';
function SearchResult() {
  //TODO: 검색 결과 기능 구현
  const getSearchList = useRecoilValue<IRecommendedList[]>(stateGetSearch);
  const [getSearchKeyword, setSearchKeyword] = useRecoilState(Searcheyword);
  const isLoading = useRecoilValue(stateIsLoading);
  const selectIdx = useRecoilValue(selectFocus);

  const clickSickList = (sickName: string) => {
    setSearchKeyword(sickName);
  };
  return (
    <div className={styles.container}>
      <div className={styles.subTitle}>추천 검색어</div>
      {!isLoading ? (
        <ul className={styles.resultBox}>
          {getSearchList.length ? (
            getSearchList.map((sick, idx) => (
              <div
                key={idx}
                className={styles.resultList}
                onClick={() => {
                  clickSickList(sick.sickNm);
                }}
                data-highlight={idx === selectIdx}
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
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default SearchResult;
