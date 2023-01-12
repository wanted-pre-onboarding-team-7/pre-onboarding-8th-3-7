import { useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import styles from './SearchBar.module.css';

interface IKeywords {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  focusIdx: number;
  setFocusIdx: React.Dispatch<React.SetStateAction<number>>;
  onKeyPressKeyword: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  focusRef: React.RefObject<HTMLUListElement>;
  getRecommendKeyword: (keyword: string) => void;
}

function SearchBar({
  keyword,
  setKeyword,
  focusIdx,
  setFocusIdx,
  onKeyPressKeyword,
  focusRef,
  getRecommendKeyword,
}: IKeywords) {
  const onChangeKeyword = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const debouncedKeyword = useDebounce(keyword);

  const searchItems = async (keyword: string) => {
    if (keyword) {
      if (keyword.trim() === '') {
        return;
      }
      getRecommendKeyword(keyword);
    }
  };

  useEffect(() => {
    searchItems(debouncedKeyword);
  }, [debouncedKeyword]);

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
