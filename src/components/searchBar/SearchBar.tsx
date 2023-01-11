import styles from './SearchBar.module.css';
import { getSearchSicks } from '../../api/index';
import { Dispatch, SetStateAction } from 'react';

type TsearchBar = {
  setSickSearchs: Dispatch<SetStateAction<TsickSearchs>>;
};
type TsickSearchs = Tsick[];
type Tsick = { sickCd: string; sickNm: string };

function SearchBar({ setSickSearchs }: TsearchBar) {
  let timer: ReturnType<typeof setTimeout>;
  const debounce = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timer) {
      clearTimeout(timer); // 0.5초 미만으로 입력이 주어질 경우 해당 timer를 clear(없앤다)한다.
    }
    timer = setTimeout(async () => {
      const searchSicks = await getSearchSicks(e.target.value);
      setSickSearchs(searchSicks);
    }, 500);
  };

  return (
    <div className={styles.container}>
      <input type="text" onChange={debounce} />
    </div>
  );
}

export default SearchBar;
