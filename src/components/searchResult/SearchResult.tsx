import styles from './SearchResult.module.css';

interface IKeywords {
  keyword: string;
  recommendKeyword: Imap[];
}

interface Imap {
  sickNm: string;
  sickCd: string;
}

function SearchResult({ keyword, recommendKeyword }: IKeywords) {
  return (
    <div className={styles.container}>
      {recommendKeyword.length === 0 ? (
        <p className={styles.resultTitle}>검색어 없음</p>
      ) : (
        <>
          <h2 className={styles.resultTitle}>추천 검색어</h2>
          <ul>
            {recommendKeyword
              .filter((_, i) => i < 9)
              .map((i: Imap) => {
                return i.sickNm.includes(keyword) ? (
                  <li key={i.sickCd} className={styles.resultItem}>
                    🔍 {i.sickNm.split(keyword)[0]}
                    <span className={styles.highlightingText}>{keyword}</span>
                    {i.sickNm.replace(i.sickNm.split(keyword)[0] + keyword, '')}
                  </li>
                ) : (
                  <li key={i.sickCd} className={styles.resultItem}>
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
