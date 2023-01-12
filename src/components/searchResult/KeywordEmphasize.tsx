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
      <span className={styles.keyword}>
        <svg
          viewBox="0 0 16 16"
          width="17px"
          height="17px"
          fill="gray"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
        </svg>
      </span>
      {/* {searchResult[0]}
      {<strong>{keyword}</strong>}
      {searchResult[1]} */}
      <div>
        {sickNm.split(keyword).map((v, idx) =>
          idx + 1 !== sickNm.split(keyword).length ? (
            <>
              <span>{v}</span>
              <strong>{keyword}</strong>
            </>
          ) : (
            <>
              <span>{v}</span>
            </>
          ),
        )}
      </div>
    </li>
  );
};
