import styles from './SearchResult.module.css';

const Dummy = [
  {
    sickCd: 'A00',
    sickNm: '콜레라',
  },
  {
    sickCd: 'A01',
    sickNm: '장티푸스 및 파라티푸스',
  },
  {
    sickCd: 'A02',
    sickNm: '기타 살모넬라 감염',
  },
  {
    sickCd: 'A03',
    sickNm: '시겔라증',
  },
  {
    sickCd: 'A04',
    sickNm: '기타 세균성 장 감염',
  },
  {
    sickCd: 'A05',
    sickNm: '달리 분류되지 않는 기타 세균성 음식매개중독',
  },
  {
    sickCd: 'A06',
    sickNm: '아메바증',
  },
  {
    sickCd: 'A07',
    sickNm: '기타 원충성 장 질환',
  },
];
function SearchResult() {
  return (
    <div className={styles.container}>
      <div className={styles.recommentTitle}>추천 검색어</div>
      <ul className={styles.keywordList}>
        {Dummy.map((keyword) => (
          <div className={styles.keywordWrapper}>
            <div className={styles.searchIcon}>🔍</div>
            <li className={styles.keyword}>{keyword.sickNm}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
