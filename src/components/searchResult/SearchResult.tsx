import styles from './SearchResult.module.css';

type TsearchResult = {
  sickSearchs: TsickSearchs;
  searchFocusIdx: number;
  isSearching: boolean;
};
type TsickSearchs = Tsick[];
type Tsick = { sickCd: string; sickNm: string };

function SearchResult({
  sickSearchs,
  searchFocusIdx,
  isSearching,
}: TsearchResult) {
  return (
    <div className={styles.container}>
      {isSearching && sickSearchs.length === 0 && (
        <>
          <span>추천 검색어</span>
          <div>검색어 없음</div>
        </>
      )}
      {isSearching &&
        sickSearchs.map(({ sickCd, sickNm }, idx) => (
          <div key={sickCd} data-focus={searchFocusIdx === idx}>
            {sickNm}
          </div>
        ))}
    </div>
  );
}

export default SearchResult;
