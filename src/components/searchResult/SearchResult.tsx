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
      {isSearching && <div className={styles.padding}>추천 검색어</div>}
      {isSearching && sickSearchs.length === 0 && <div>검색어 없음</div>}
      {isSearching && (
        <>
          {sickSearchs.map(({ sickCd, sickNm }, idx) => (
            <div
              key={sickCd}
              data-focus={searchFocusIdx === idx}
              className={styles.item}
            >
              {sickNm}
            </div>
          ))}
          <div className={styles.padding}></div>
        </>
      )}
    </div>
  );
}

export default SearchResult;
