import React, { KeyboardEvent, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import useDebounce from '../../hooks/useDebounce';
import useThrottle from '../../hooks/useThrottle';
import {
  initialKeyboardState,
  inputValueState,
  KeyboardState,
  keyboardState,
} from '../../store/atom';
import { KEY, MAX_RESULT_LEN } from '../../utils/constants';
import { ISearchBar } from '../../utils/type';
import styles from './SearchBar.module.css';

const SearchBar: React.FC<ISearchBar> = ({ setIsInputFocus }) => {
  const [inputValue, setinputValue] = useRecoilState(inputValueState);
  const [keyboard, setkeyboard] = useRecoilState<KeyboardState>(keyboardState);
  const [searchValue, setSearchValue] = useState<string>('');
  const debounceValue = useDebounce(searchValue);

  useEffect(() => {
    setinputValue(debounceValue);
    setkeyboard(initialKeyboardState);
  }, [debounceValue, setinputValue, setkeyboard]);

  useEffect(() => {
    setSearchValue(inputValue);
  }, [inputValue]);

  const onSubmitClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget?.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const prevIndex = keyboard.index;
    let index: number = prevIndex;
    let isSelected: boolean = false;
    if (e.key === KEY.UP) {
      index = prevIndex > 0 ? prevIndex - 1 : prevIndex;
    }
    if (e.key === KEY.DOWN) {
      index = prevIndex < MAX_RESULT_LEN ? prevIndex + 1 : prevIndex;
    }
    if (e.key === KEY.ENTER) {
      isSelected = true;
    }
    setkeyboard({ index, isSelected });
  };

  const throttleKeyDown = useThrottle(onKeyDown);

  return (
    <>
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
            onKeyDown={throttleKeyDown}
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
    </>
  );
};

export default SearchBar;
