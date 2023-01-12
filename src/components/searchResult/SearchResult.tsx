import { focusIndex, sickName, sickState } from '../../store/atom';
import { useRecoilValue } from 'recoil';
import styles from './SearchResult.module.css';
import React, { useCallback } from 'react';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

type SickType = {
  sickCD: string;
  sickNm: string;
};

function SearchResult() {
  const recoilSickState = useRecoilValue<SickType[]>(sickState);
  const recoilSickName = useRecoilValue(sickName);
  const recoilFocusIndex = useRecoilValue(focusIndex);

  return (
    <div className={styles.container}>
      <div className={styles.recommentTitle}>추천 검색어</div>
      <ul className={styles.keywordList}>
        {recoilSickName ? (
          recoilSickState.map((sick, index) => (
            <div
              className={styles.keywordWrapper}
              key={index}
              data-focus={index === recoilFocusIndex}
              onClick={() => {
                alert('결과화면으로 이동');
              }}
            >
              <div className={styles.searchIcon}>🔍</div>
              <li className={styles.keyword}>
                {sick.sickNm.split(recoilSickName)[0]}
                <em className={styles.highlightKeyword}>{recoilSickName}</em>
                {sick.sickNm.split(recoilSickName)[1]}
              </li>
            </div>
          ))
        ) : (
          <div>검색어 없음</div>
        )}
      </ul>
    </div>
  );
}

export default SearchResult;
