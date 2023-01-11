import styles from './SearchResult.module.css';

type TsearchResult = {
  sickSearchs: TsickSearchs;
};
type TsickSearchs = Tsick[];
type Tsick = { sickCd: string; sickNm: string };

function SearchResult({ sickSearchs }: TsearchResult) {
  return (
    <div className={styles.container}>
      <span>추천 검색어</span>
      {sickSearchs.map(({ sickCd, sickNm }) => (
        <div key={sickCd}>{sickNm}</div>
      ))}
    </div>
  );
}

export default SearchResult;
