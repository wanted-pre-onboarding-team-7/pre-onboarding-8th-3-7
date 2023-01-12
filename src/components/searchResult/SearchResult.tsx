import { sickName, sickState } from '../../store/atom';
import { useRecoilValue } from 'recoil';
import styles from './SearchResult.module.css';

type SickType = {
  sickCD: string;
  sickNm: string;
};

function SearchResult() {
  const recoilSickState = useRecoilValue<SickType[]>(sickState);
  const recoilSickName = useRecoilValue(sickName);

  return (
    <div className={styles.container}>
      <div className={styles.recommentTitle}>추천 검색어</div>
      <ul className={styles.keywordList}>
        {recoilSickName ? (
          recoilSickState.map((sick, index) => (
            <div
              className={styles.keywordWrapper}
              onClick={() => {
                alert('결과화면으로 이동');
              }}
            >
              <div className={styles.searchIcon}>🔍</div>
              <li className={styles.keyword} key={index}>
                {sick.sickNm}
              </li>
            </div>
          ))
        ) : (
          <div>검색어 없음</div>
        )}
      </ul>
    </div>
  );
}

export default SearchResult;
