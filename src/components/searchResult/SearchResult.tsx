import styles from './SearchResult.module.css';

type TsearchResult = {
  sickSearchs: TsickSearchs;
  searchFocusIdx: number;
};
type TsickSearchs = Tsick[];
type Tsick = { sickCd: string; sickNm: string };

function SearchResult({ sickSearchs, searchFocusIdx }: TsearchResult) {
  return (
    <div className={styles.container}>
      <span>추천 검색어</span>
      {sickSearchs.map(({ sickCd, sickNm }, idx) => (
        <div key={sickCd} data-focus={searchFocusIdx === idx}>
          {sickNm}
        </div>
      ))}
      {sickSearchs.length === 0 && <div>검색어 없음</div>}
    </div>
  );
}

export default SearchResult;
