import styles from './SearchBar.module.css';
interface IKeywords {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ keyword, setKeyword }: IKeywords) {
  const onChangeKeyword = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };
  console.log(keyword);

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
