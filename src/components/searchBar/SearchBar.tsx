import styles from './SearchBar.module.css';
import { getSearchSicks } from '../../api/index';
import React, { Dispatch, SetStateAction } from 'react';
import { getItem, setItem } from '../../utils/localStorage';

type TsearchBar = {
  setSickSearchs: Dispatch<SetStateAction<TsickSearchs>>;
  setSearchFocusIdx: Dispatch<SetStateAction<number>>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
  sickSearchs: TsickSearchs;
};
type TsickSearchs = Tsick[];
type Tsick = { sickCd: string; sickNm: string };

function SearchBar({
  setSickSearchs,
  setSearchFocusIdx,
  setIsSearching,
  sickSearchs,
  setSearchValue,
}: TsearchBar) {
  let timer: ReturnType<typeof setTimeout>;

  const debounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      searchingSickData(inputValue);
    }, 500);
  };

  const searchingSickData = async (inputValue: string) => {
    const localSickData = getItem('sick') || {};
    setIsSearching(true);
    setSearchValue(inputValue);
    if (localSickData[inputValue]) {
      setSickSearchs(inputValue !== '' ? localSickData[inputValue] : []);
    } else {
      const searchSicks = await getSearchSicks(inputValue, 7);
      setSickSearchs(searchSicks);
      addSickCacheData(localSickData, inputValue, searchSicks);
    }
  };

  const addSickCacheData = (
    localSickData: any,
    inputValue: string,
    searchSicks: TsickSearchs,
  ) => {
    const newLocalStorageSicks = {
      ...localSickData,
      [inputValue]: searchSicks,
    };
    setItem('sick', newLocalStorageSicks);
  };

  const getFocusIdx = (searchFocusIdx: number): number => {
    const sickSearchsLength = sickSearchs.length;
    return searchFocusIdx >= 0
      ? searchFocusIdx % sickSearchsLength
      : (searchFocusIdx + sickSearchsLength) % sickSearchsLength;
  };

  const keyupFocusSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        setSearchFocusIdx((idx) => getFocusIdx(idx - 1));
        break;
      case 'ArrowDown':
        setSearchFocusIdx((idx) => getFocusIdx(idx + 1));
        break;
      default:
    }
  };

  const focusOut = () => {
    setIsSearching(false);
    setSearchFocusIdx(-1);
  };

  return (
    <div className={styles.container}>
      <div>🔍</div>
      <input
        type="text"
        onChange={debounce}
        onKeyUp={keyupFocusSearch}
        onBlur={focusOut}
      />
    </div>
  );
}

export default SearchBar;
