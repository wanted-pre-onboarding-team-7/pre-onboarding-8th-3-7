import styles from './SearchResult.module.css';

type Props = {
  keyword: string;
  sickNm: string;
  isFocus: boolean;
};

export const KeywordEmphasize = ({ keyword, sickNm, isFocus }: Props) => {
  const splitSickNm = sickNm.split(keyword);

  return (
    <li
      className={`${styles['recent-keyword']} ${
        isFocus ? styles['hovered'] : ''
      }`}
    >
      <span className={styles.keyword}>🔍</span>
      <div>
        {splitSickNm.map((character, idx) =>
          idx + 1 !== splitSickNm.length ? (
            <span key={idx}>
              {character}
              <strong>{keyword}</strong>
            </span>
          ) : (
            <span key={idx}>{character}</span>
          ),
        )}
      </div>
    </li>
  );
};
