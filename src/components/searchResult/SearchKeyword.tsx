import { KeywordEmphasize } from './KeywordEmphasize';
import styles from './SearchResult.module.css';
import { dataType } from './SearchResult';
import React, { memo } from 'react';

type Props = {
  currentIndex: number;
  keyword: string;
  data: dataType[];
  ulRef: React.RefObject<HTMLUListElement>;
};
const SearchKeyword = ({ currentIndex, keyword, data, ulRef }: Props) => {
  return (
    <div className={styles['container-padding']}>
      {data.length > 0 ? (
        <>
          <div className={styles.subject}>
            <h3>추천 검색어</h3>
          </div>
          <ul ref={ulRef}>
            {data.map(({ sickNm }, i) => {
              return (
                <KeywordEmphasize
                  key={i}
                  isFocus={currentIndex === i}
                  keyword={keyword}
                  sickNm={sickNm}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <div>검색어 없음</div>
      )}
    </div>
  );
};

export default memo(SearchKeyword);
