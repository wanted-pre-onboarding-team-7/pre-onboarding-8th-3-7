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
  selectFocus,
} from '../../store/atoms';
import useDebounce from '../../hooks/useDebounce';

function SearchBar() {
  //TODO: 검색창 기능 구현
  const [keyword, setKeyword] = useState<string>('');
  const inputRef = useRef<any>();
  const setIsFocus = useSetRecoilState<boolean>(isInputFocus);
  const [getSickList, setSickList] =
    useRecoilState<IRecommendedList[]>(stateGetSearch);
  const [searchKeyword, setSearchKeyword] = useRecoilState(Searcheyword);
  const [sickListHistory, setSickListHistory] =
    useRecoilState<IRecommendedList[]>(stateSickListHistory);
  const debounceValue = useDebounce(keyword);
  const [selectIdx, setselectIdx] = useRecoilState<number>(selectFocus);

  const onKeyupHandler = (evt: any) => {
    switch (evt.key) {
      case 'ArrowDown':
        setselectIdx((prev) =>
          prev < getSickList.length - 1 ? prev + 1 : prev,
        );
        inputRef.current.value = getSickList[selectIdx + 1].sickNm;
        break;
      case 'ArrowUp':
        setselectIdx((prev) => (prev > 0 ? prev - 1 : 0));
        inputRef.current.value = getSickList[selectIdx - 1].sickNm;
        break;
    }
  };

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
        setSickList(cacheSickList.slice(0, 7));
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
    alert(inputRef.current.value + '에 대한 검색결과입니다.');
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
          onKeyUp={onKeyupHandler}
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
