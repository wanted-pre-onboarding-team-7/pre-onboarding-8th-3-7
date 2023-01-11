import { sickState } from '../../store/atom';
import { useRecoilValue } from 'recoil';
import styles from './SearchResult.module.css';

interface SickType {
  sickCD: string;
  sickNm: string;
}
function SearchResult() {
  const recoilSickState = useRecoilValue<SickType[]>(sickState);
  return (
    <div className={styles.container}>
      <div className={styles.recommentTitle}>추천 검색어</div>
      <ul className={styles.keywordList}>
        {recoilSickState.map((sick) => (
          <div className={styles.keywordWrapper}>
            <div className={styles.searchIcon}>🔍</div>
            <li className={styles.keyword} key={sick.sickCD}>
              {sick.sickNm}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
