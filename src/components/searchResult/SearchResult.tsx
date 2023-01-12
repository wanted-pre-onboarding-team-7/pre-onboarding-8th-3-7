import styles from './SearchResult.module.css';

interface IKeywords {
  keyword: string;
  recommendKeyword: Imap[];
  focusIdx: number;
  setFocusIdx: React.Dispatch<React.SetStateAction<number>>;
  onKeyPressKeyword: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  focusRef: React.RefObject<HTMLUListElement>;
}

interface Imap {
  sickNm: string;
  sickCd: string;
}

function SearchResult({
  keyword,
  recommendKeyword,
  focusIdx,
  setFocusIdx,
  onKeyPressKeyword,
  focusRef,
}: IKeywords) {
  return (
    <div className={styles.container}>
      {recommendKeyword.length === 0 || keyword === '' ? (
        <p className={styles.noResult}>검색어 없음</p>
      ) : (
        <>
          <h2 className={styles.resultTitle}>추천 검색어</h2>
          <ul ref={focusRef}>
            {recommendKeyword
              .filter((_, i) => i < 9)
              .map((i: Imap, idx) => {
                return i.sickNm.includes(keyword) ? (
                  <li
                    key={idx}
                    className={
                      focusIdx === idx
                        ? `${styles.resultItem} ${styles.hover}`
                        : styles.resultItem
                    }
                  >
                    {/* <li key={i.sickCd} className={styles.resultItem}> */}
                    🔍 {i.sickNm.split(keyword)[0]}
                    <span className={styles.highlightingText}>{keyword}</span>
                    {i.sickNm.replace(i.sickNm.split(keyword)[0] + keyword, '')}
                  </li>
                ) : (
                  <li
                    key={idx}
                    className={
                      focusIdx === idx
                        ? `${styles.resultItem} ${styles.hover}`
                        : styles.resultItem
                    }
                  >
                    🔍 {i.sickNm}
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </div>
  );
}

export default SearchResult;
