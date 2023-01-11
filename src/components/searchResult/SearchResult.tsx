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
      <h2>추천 검색어</h2>
      <ul>
        {recommendKeyword
          .filter((_, i) => i < 10)
          .map((i: Imap) => {
            return <li key={i.sickCd}>{i.sickNm}</li>;
          })}
      </ul>
      <p>검색어 없음</p>
    </div>
  );
}

export default SearchResult;
