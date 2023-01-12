import { sickName, sickState } from '../../store/atom';
import { useRecoilValue } from 'recoil';
import styles from './SearchResult.module.css';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

type SickType = {
  sickCD: string;
  sickNm: string;
};

function SearchResult() {
  const recoilSickState = useRecoilValue<SickType[]>(sickState);
  const recoilSickName = useRecoilValue(sickName);
  const [cursor, setCursor] = useState<number>(-1);

  const keyboardNavigation = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setCursor((prev) =>
        prev < recoilSickState.length - 1 ? prev + 1 : prev,
      );
    }
    if (e.key === 'ArrowUp') {
      setCursor((prev) => (prev > 0 ? prev - 1 : 0));
    }
    if (e.key === 'Escape') {
      setCursor(-1);
    }
    if (e.key === 'Enter') {
      alert('결과화면으로 이동');
      setCursor(-1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyboardNavigation);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.recommentTitle}>추천 검색어</div>
      <ul className={styles.keywordList}>
        {recoilSickName ? (
          recoilSickState.map((sick, index) => (
            <div
              className={styles.keywordWrapper}
              key={index}
              data-focus={index === cursor}
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
