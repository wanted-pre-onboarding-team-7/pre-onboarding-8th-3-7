import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import useDebounce from '../../hooks/useDebounce';
import { inputValueState, isInputFocusState } from '../../store/atom';
import styles from './SearchBar.module.css';

function SearchBar() {
  const setIsInputFocus = useSetRecoilState(isInputFocusState);
  const setinputValue = useSetRecoilState(inputValueState);
  const [searchValue, setSearchValue] = useState<string>('');
  const debounceValue = useDebounce(searchValue);

  useEffect(() => {
    setinputValue(debounceValue);
  }, [debounceValue, setinputValue]);

  const onSubmitClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget?.value);
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
          value={searchValue}
          onChange={onChange}
          onFocus={() => setIsInputFocus(true)}
          onBlur={() => setIsInputFocus(false)}
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
