import styles from './SearchBar.module.css';
interface IKeywords {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  debounce: () => void;
  focusIdx: number;
  setFocusIdx: React.Dispatch<React.SetStateAction<number>>;
  onKeyPressKeyword: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  focusRef: React.RefObject<HTMLUListElement>;
}

function SearchBar({
  keyword,
  setKeyword,
  debounce,
  focusIdx,
  setFocusIdx,
  onKeyPressKeyword,
  focusRef,
}: IKeywords) {
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
        onKeyUp={onKeyPressKeyword}
      ></input>
      <button type="button" className={styles.barBtn}></button>
    </div>
  );
}

export default SearchBar;
