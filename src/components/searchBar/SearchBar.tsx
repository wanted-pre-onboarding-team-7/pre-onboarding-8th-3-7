import React, { useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { inputRefState, isInputFocus } from '../../store/atom';
import { getSearchResult } from '../../utils/apiFn';
import styles from './SearchBar.module.css';

function SearchBar() {
  const setIsInpuFocus = useSetRecoilState(isInputFocus);
  const [inputRef, setInputRef] = useRecoilState(inputRefState);
  const searchRef = useRef<HTMLInputElement>(null);

  const onSubmitClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const result = await getSearchResult(searchRef.current?.value);
    console.log('result', searchRef.current?.value, result);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label className={styles.searchLabel} htmlFor="search">
          🔍
        </label>
        <input
          className={styles.searchInput}
          id="search"
          type="text"
          ref={searchRef}
          onFocus={() => setIsInpuFocus(true)}
          onBlur={() => setIsInpuFocus(false)}
        />
        <input
          className={styles.submitBtn}
          type="submit"
          value="검색"
          onClick={onSubmitClick}
        />
      </form>
    </div>
  );
}

export default SearchBar;
