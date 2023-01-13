import styles from './SearchResult.module.css';

type Props = {
  keyword: string;
  sickNm: string;
  isFocus: boolean;
};

export const KeywordEmphasize = ({ keyword, sickNm, isFocus }: Props) => {
  const splitSickNmByKeyword = sickNm.split(keyword);

  return (
    <li
      className={`${styles['recent-keyword']} ${
        isFocus ? styles['hovered'] : ''
      }`}
    >
      <span className={styles.keyword}>🔍</span>
      <div>
        {splitSickNmByKeyword.map((character, idx) =>
          idx + 1 !== splitSickNmByKeyword.length ? (
            <span>
              {character}
              <strong>{keyword}</strong>
            </span>
          ) : (
            <span>{character}</span>
          ),
        )}
      </div>
    </li>
  );
};
