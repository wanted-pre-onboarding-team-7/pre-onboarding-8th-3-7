import styles from './SearchBar.module.css';
interface IKeywords {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  debounce: () => void;
}

function SearchBar({ keyword, setKeyword, debounce }: IKeywords) {
  const onChangeKeyword = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
    debounce();
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.barInput}
        placeholder="질환명을 입력해 주세요"
        onChange={onChangeKeyword}
      ></input>
      <button type="button" className={styles.barBtn}></button>
    </div>
  );
}

export default SearchBar;
