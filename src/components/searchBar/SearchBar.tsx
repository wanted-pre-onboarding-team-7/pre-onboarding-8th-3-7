import styles from './SearchBar.module.css';
import { getSearchSicks } from '../../api/index';
import React, { Dispatch, SetStateAction } from 'react';
import { getItem, setItem } from '../../utils/localStorage';

type TsearchBar = {
  setSickSearchs: Dispatch<SetStateAction<TsickSearchs>>;
};
type TsickSearchs = Tsick[];
type Tsick = { sickCd: string; sickNm: string };

function SearchBar({ setSickSearchs }: TsearchBar) {
  let timer: ReturnType<typeof setTimeout>;

  const debounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    timer && clearTimeout(timer);
    timer = setTimeout(async () => {
      const localSickData = getItem('sick') || {};
      if (localSickData[inputValue]) {
        setSickSearchs(inputValue !== '' ? localSickData[inputValue] : []);
      } else {
        const searchSicks = await getSearchSicks(inputValue);
        setSickSearchs(searchSicks);
        const newLocalStorageSicks = {
          ...localSickData,
          [inputValue]: searchSicks,
        };
        setItem('sick', newLocalStorageSicks);
      }
    }, 500);
  };

  return (
    <div className={styles.container}>
      <input type="text" onChange={debounce} />
    </div>
  );
}

export default SearchBar;
