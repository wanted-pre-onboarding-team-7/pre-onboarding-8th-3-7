import React, { useEffect, useRef, useState } from 'react';
import styles from './SearchBar.module.css';
import { getSearchRecommended } from '../../api/api';
import { IRecommendedList } from '../../\btypes';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  stateGetSearch,
  isInputFocus,
  Searcheyword,
  stateSickListHistory,
} from '../../store/atoms';
import useDebounce from '../../hooks/useDebounce';

function SearchBar() {
  //TODO: 검색창 기능 구현
  const [keyword, setKeyword] = useState<string>('');
  const inputRef = useRef<any>();
  const setIsFocus = useSetRecoilState<boolean>(isInputFocus);
  const setSickList = useSetRecoilState<IRecommendedList[]>(stateGetSearch);
  const [searchKeyword, setSearchKeyword] = useRecoilState(Searcheyword);
  const [sickListHistory, setSickListHistory] =
    useRecoilState<IRecommendedList[]>(stateSickListHistory);
  const debounceValue = useDebounce(keyword);

  useEffect(() => {
    getSearchList();
  }, [debounceValue]);

  useEffect(() => {
    setKeyword(searchKeyword);
    inputRef.current.value = searchKeyword;
  }, [searchKeyword]);

  const getSearchList = async () => {
    if (keyword) {
      const cacheSickList = sickListHistory?.filter((sick) =>
        sick.sickNm.includes(keyword),
      );
      if (cacheSickList.length >= 7) {
        setSearchKeyword(keyword);
        setSickList(cacheSickList);
        return;
      } else {
        try {
          const res = await getSearchRecommended(keyword);
          console.info('calling api');
          const sickData = res.data.slice(0, 7);
          setSickList(sickData);
          setSickListHistory((prev: IRecommendedList[]) => {
            const newArr = [...prev, ...sickData];
            const resultArr = newArr.reduce(
              (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
              [],
            );
            return [...resultArr];
          });
          setSearchKeyword(keyword);
        } catch (e) {
          // TODO: ERROR
        }
      }
    } else {
      setSickList([]);
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
            setTimeout(() => {
              setIsFocus(false);
            }, 100);
          }}
          defaultValue={searchKeyword}
          ref={inputRef}
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
