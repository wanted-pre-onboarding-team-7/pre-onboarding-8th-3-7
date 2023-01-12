import { focusIndex, sickName, sickState } from '../../store/atom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styles from './SearchBar.module.css';
import React, { ChangeEvent } from 'react';
import { getSickList } from '../../lib/api/getSickList';

function SearchBar() {
  const [recoilSickName, setRecoilSickName] = useRecoilState(sickName);
  const [recoilSickState, setRecoilSickState] = useRecoilState(sickState);
  const [recoilFocusIndex, setRecoilFocusIndex] = useRecoilState(focusIndex);

  const changeSickName = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRecoilSickName(value);
    const response = await getSickList(value);
    if (response.length >= 7) {
      response.length = 7;
    }
    setRecoilSickState(response);
  };

  const clickSearchButton = () => {
    if (recoilSickName === '') {
      alert('검색어를 입력해주세요');
    } else {
      alert('결과화면으로 이동');
    }
  };

  const keyboardNavigation = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setRecoilFocusIndex((prev) =>
        prev < recoilSickState.length - 1 ? prev + 1 : prev,
      );
    }
    if (e.key === 'ArrowUp') {
      setRecoilFocusIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
    if (e.key === 'Escape') {
      setRecoilFocusIndex(-1);
    }
    if (e.key === 'Enter') {
      alert('결과화면으로 이동');
      setRecoilFocusIndex(-1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchIcon}>🔍</div>
      <input
        className={styles.searchInput}
        type="text"
        value={recoilSickName}
        onChange={changeSickName}
        onKeyUp={keyboardNavigation}
      ></input>
      <div className={styles.searchButton} onClick={clickSearchButton}>
        검색
      </div>
    </div>
  );
}

export default SearchBar;
