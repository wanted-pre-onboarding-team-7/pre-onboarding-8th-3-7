import { useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { IKeywords } from '../../utils/inerface';
import styles from './SearchBar.module.css';

function SearchBar({
  keyword,
  setKeyword,
  focusIdx,
  setFocusIdx,
  onKeyPressKeyword,
  focusRef,
  getRecommendKeyword,
  setViewResult,
}: IKeywords) {
  const onChangeKeyword = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword!(e.currentTarget.value);
  };

  const debouncedKeyword = useDebounce(keyword);

  const searchItems = async (keyword: string) => {
    if (keyword) {
      if (keyword.trim() === '') {
        return;
      }
      getRecommendKeyword!(keyword);
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
        onFocus={() => setViewResult!(true)}
        onBlur={() => setViewResult!(false)}
      ></input>
      <button type="button" className={styles.barBtn}></button>
    </div>
  );
}

export default SearchBar;
