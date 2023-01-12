import styles from './Home.module.css';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import { useState } from 'react';

type TsickSearchs = Tsick[];
type Tsick = { sickCd: string; sickNm: string };

function Home() {
  const [sickSearchs, setSickSearchs] = useState<TsickSearchs>([]);
  const [searchFocusIdx, setSearchFocusIdx] = useState(-1);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className={styles.container}>
      <span>국내 모든 임상시험 검색하고 온라인으로 참여하기</span>
      <SearchBar
        setSickSearchs={setSickSearchs}
        setSearchFocusIdx={setSearchFocusIdx}
        setIsSearching={setIsSearching}
        sickSearchs={sickSearchs}
      />
      <SearchResult
        sickSearchs={sickSearchs}
        searchFocusIdx={searchFocusIdx}
        isSearching={isSearching}
      />
    </div>
  );
}

export default Home;
