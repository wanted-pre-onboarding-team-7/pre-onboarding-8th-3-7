import React from 'react';
import styles from './SearchResult.module.css';

type Props = {
  keyword: string;
  sickNm: string;
  isFocus: boolean;
};

export const KeywordEmphasize = ({ keyword, sickNm, isFocus }: Props) => {
  return (
    <li
      className={`${styles['recent-keyword']} ${
        isFocus ? styles['hovered'] : ''
      }`}
    >
      <span className={styles.keyword}>🔍</span>
      <div>
        {sickNm.split(keyword).map((v, idx) =>
          idx + 1 !== sickNm.split(keyword).length ? (
            <>
              <span>{v}</span>
              <strong>{keyword}</strong>
            </>
          ) : (
            <span>{v}</span>
          ),
        )}
      </div>
    </li>
  );
};
