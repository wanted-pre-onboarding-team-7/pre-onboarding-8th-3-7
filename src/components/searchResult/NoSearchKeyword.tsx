import styles from './SearchResult.module.css';

const NoSearchKeyword = () => {
  return (
    <>
      <div
        className={`${styles['top-container']} ${styles['container-padding']}`}
      >
        <h3 className={styles.subject}>최근 검색어</h3>
        <ul className={styles['keyword-list']}>
          <li className={styles['recent-keyword']}>
            <span className={styles.keyword}>🔍</span>암
          </li>
          <li className={styles['recent-keyword']}>
            <span className={styles.keyword}>🔍</span>
            관절염
          </li>
        </ul>
      </div>
      <div
        className={`${styles['container-padding']} ${styles['bottom-container']}`}
      >
        <h3 className={styles.subject}>추천 검색어로 검색해보세요</h3>
        <ul className={styles['tags-container']}>
          <li className={styles.tag}>비만</li>
          <li className={styles.tag}>B형간염</li>
          <li className={styles.tag}>관절염</li>
        </ul>
      </div>
    </>
  );
};

export default NoSearchKeyword;
