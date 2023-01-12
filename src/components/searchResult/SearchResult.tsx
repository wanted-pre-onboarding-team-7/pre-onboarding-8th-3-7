import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { InputValue, inputValueState } from '../../store/atom';
import { getSearchResults } from '../../utils/apiFn';
import { MAX_RESULT_LEN } from '../../utils/constants';
import { Result, ResultPainted } from '../../utils/type';
import ResultItem from './ResultItem';
import styles from './SearchResult.module.css';

const SearchResult = () => {
  const inputValue = useRecoilValue<InputValue>(inputValueState);
  const [results, setResults] = useState([]);

  const paintInputResults = useCallback(async (keyword: InputValue) => {
    const queryResults = await getSearchResults(keyword);
    const paintedResult = queryResults
      .slice(0, MAX_RESULT_LEN)
      .map((result: Result) => {
        result.bold = keyword;
        result.notBold = result.sickNm.split(keyword);
        return result;
      });

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
        <ul role="listbox" id="search-results">
          {results.map((result: ResultPainted, index: number) => (
            <ResultItem key={result.sickCd} result={result} index={index + 1} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResult;
