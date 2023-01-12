import styles from './SearchResult.module.css';

type TsearchResult = {
  sickSearchs: TsickSearchs;
  searchFocusIdx: number;
  isSearching: boolean;
  searchValue: string;
};
type TsickSearchs = Tsick[];
type Tsick = { sickCd: string; sickNm: string };

function SearchResult({
  sickSearchs,
  searchFocusIdx,
  isSearching,
  searchValue,
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
              {sickNm.split(searchValue).map((v, idx) =>
                idx + 1 !== sickNm.length ? (
                  <>
                    <span>{v}</span>
                    <span className={styles.bold}>{searchValue}</span>
                  </>
                ) : (
                  <>
                    <span>{v}</span>
                  </>
                ),
              )}
            </div>
          ))}
          <div className={styles.padding}></div>
        </>
      )}
    </div>
  );
}

export default SearchResult;
