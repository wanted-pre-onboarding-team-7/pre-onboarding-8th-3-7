import styles from './SearchResult.module.css';

const NoSearchKeyword = () => {
  return (
    <>
      <div
        className={`${styles['top-container']} ${styles['container-padding']}`}
      >
        <div className={styles.subject}>
          <h3>최근 검색어</h3>
        </div>
        <div className={styles['keyword-list']}>
          <ul>
            <li className={styles['recent-keyword']}>
              <span className={styles.keyword}>🔍</span>암
            </li>
            <li className={styles['recent-keyword']}>
              <span className={styles.keyword}>🔍</span>
              관절염
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles['container-padding']} ${styles['bottom-container']}`}
      >
        <div className={styles.subject}>
          <h3>추천 검색어로 검색해보세요</h3>
        </div>
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
