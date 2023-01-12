import { useRef, useState } from 'react';
import { KeywordEmphasize } from './KeywordEmphasize';
import styles from './SearchResult.module.css';

type dataType = {
  sickCd: string;
  sickNm: string;
};

type SearchResultProps = {
  keyword: string;
  data: dataType[];
};

function SearchResult({ keyword, data }: SearchResultProps) {
  const ulRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const handleKeyArrow = (e: React.KeyboardEvent) => {
    if (data.length > 0) {
      switch (e.key) {
        case 'ArrowDown': //키보드 아래 키
          setCurrentIndex(currentIndex + 1);
          if (ulRef.current?.childElementCount === currentIndex + 1)
            setCurrentIndex(0);
          break;
        case 'ArrowUp': //키보드 위에 키
          setCurrentIndex(currentIndex - 1);
          if (currentIndex <= 0) {
            setCurrentIndex(-1);
          }
          break;
        case 'Escape': // esc key를 눌렀을때,
          setCurrentIndex(-1);
          break;
      }
    }
  };

  return (
    <div className={styles.container}>
      {keyword.length ? (
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
      ) : (
        <>
          <div
            className={`${styles['top-container']} ${styles['container-padding']}`}
          >
            <div className={styles.subject}>
              <h3>최근 검색어</h3>
            </div>
            <div className={styles['keyword-list']}>
              <ul>
                <li className={styles['recent-keyword']}>
                  <span className={styles.keyword}>🔍</span>암
                </li>
                <li className={styles['recent-keyword']}>
                  <span className={styles.keyword}>🔍</span>
                  관절염
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles['container-padding']} ${styles['bottom-container']}`}
          >
            <div className={styles.subject}>
              <h3>추천 검색어로 검색해보세요</h3>
            </div>
            <div className={styles['tags-container']}>
              <ul className={styles.tags}>
                <li className={styles.tag}>비만</li>
                <li className={styles.tag}>B형간염</li>
                <li className={styles.tag}>관절염</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SearchResult;
