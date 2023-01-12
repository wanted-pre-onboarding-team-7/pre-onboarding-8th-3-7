import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import { getSearchRecommended } from '../../api/api';
import { IRecommendedList } from '../../\btypes';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { stateGetSearch, isInputFocus, Searcheyword } from '../../store/atoms';
import useDebounce from '../../hooks/useDebounce';

function SearchBar() {
  //TODO: 검색창 기능 구현
  const [keyword, setKeyword] = useState<string>('');
  const [isFocus, setIsFocus] = useRecoilState<boolean>(isInputFocus);
  const setSearchKeyword = useSetRecoilState(Searcheyword);
  const setRecommendedList =
    useSetRecoilState<IRecommendedList[]>(stateGetSearch);
  const debounceValue = useDebounce(keyword);

  useEffect(() => {
    getSearchList();
  }, [debounceValue]);

  const getSearchList = async () => {
    if (keyword) {
      try {
        const res = await getSearchRecommended(keyword);
        console.info('calling api');
        const sickData = res.data.slice(0, 7);
        setRecommendedList(sickData);
        setSearchKeyword(keyword);
      } catch (e) {
        // TODO: ERROR
      }
    } else {
      setRecommendedList([]);
    }
  };

  const submitKeyword = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    evt.preventDefault();
  };

  const onChangeKeyword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(evt.currentTarget.value);
  };

  return (
    <form className={styles.container}>
      <div className={styles.searchBox}>
        <label htmlFor={styles.searchInput}>🔎</label>
        <input
          id={styles.searchInput}
          type="type"
          onChange={onChangeKeyword}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
        />
      </div>
      <button
        type="button"
        onClick={submitKeyword}
        className={styles.searchBtn}
      >
        검색
      </button>
    </form>
  );
}

export default SearchBar;
