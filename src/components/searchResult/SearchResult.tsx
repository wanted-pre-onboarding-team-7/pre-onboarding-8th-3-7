import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { InputValue, inputValueState } from '../../store/atom';
import { getSearchResults } from '../../utils/apiFn';
import { MAX_RESULT_LEN } from '../../utils/constants';
import styles from './SearchResult.module.css';

interface Result {
  sickCd: string;
  sickNm: string;
  notBold?: Array<string>;
}
function SearchResult() {
  const inputValue = useRecoilValue<InputValue>(inputValueState);
  const [results, setResults] = useState([]);

  const paintInputResults = useCallback(async (keyword: InputValue) => {
    const queryResults = await getSearchResults(keyword);
    const paintedResult = queryResults
      .slice(0, MAX_RESULT_LEN)
      .map((result: Result) => {
        result.notBold = result.sickNm.split(keyword);
        return result;
      });
    // const splitSickNm = queryResults.sickNm.split(keyword);
    setResults(paintedResult);
  }, []);

  useEffect(() => {
    if (inputValue) {
      paintInputResults(inputValue);
    } else {
      setResults([]);
    }
  }, [inputValue, paintInputResults]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>추천 검색어</span>
      {results.length === 0 ? (
        <span>검색어 없음</span>
      ) : (
        <ul role="listbox">
          {results.map((result: Result) => (
            <li className={styles.listItem} key={result.sickCd}>
              <span>🔍</span>
              {result.notBold && (
                <div>
                  <span>{result.notBold[0]}</span>
                  <span className={styles.bold}>{inputValue}</span>
                  <span>{result.notBold[1]}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResult;
