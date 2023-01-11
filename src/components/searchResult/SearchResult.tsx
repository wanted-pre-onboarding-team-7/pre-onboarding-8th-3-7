import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { InputValue, inputValueState } from '../../store/atom';
import { getSearchResults } from '../../utils/apiFn';
import { MAX_RESULT_LEN } from '../../utils/constants';
import styles from './SearchResult.module.css';

interface Result {
  sickCd: string;
  sickNm: string;
}
function SearchResult() {
  const inputValue = useRecoilValue<InputValue>(inputValueState);
  const [results, setResults] = useState([]);

  const paintInputResults = useCallback(async (inputValue: InputValue) => {
    const queryResults = await getSearchResults(inputValue);
    setResults(queryResults.slice(0, MAX_RESULT_LEN));
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
              <span>{result.sickNm}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResult;
