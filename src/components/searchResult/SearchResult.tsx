import { useRef, useState } from 'react';
import Loading from '../loading/Loading';
import { KeywordEmphasize } from './KeywordEmphasize';
import styles from './SearchResult.module.css';

type dataType = {
  sickCd: string;
  sickNm: string;
};

type SearchResultProps = {
  keyword: string;
  data: dataType[];
  isLoading: boolean;
};

function SearchResult({ keyword, data, isLoading }: SearchResultProps) {
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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!keyword.length ? (
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
                      암
                    </li>
                    <li className={styles['recent-keyword']}>
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
                      관절염dsfgdfsgdsfgdfsgdsfgfsd
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
          ) : (
            <div className={styles['container-padding']}>
              <li className={styles['recent-keyword']}>
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
                {keyword}
              </li>
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
          )}
        </>
      )}
    </div>
  );
}

export default SearchResult;
