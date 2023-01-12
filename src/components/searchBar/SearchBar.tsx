import { sickName, sickState } from '../../store/atom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styles from './SearchBar.module.css';
import React, { ChangeEvent } from 'react';
import { getSickList } from '../../lib/api/getSickList';

function SearchBar() {
  const [recoilSickName, setRecoilSickName] = useRecoilState(sickName);
  const setRecoilSickState = useSetRecoilState(sickState);

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

  return (
    <div className={styles.container}>
      <div className={styles.searchIcon}>🔍</div>
      <input
        className={styles.searchInput}
        type="text"
        value={recoilSickName}
        onChange={changeSickName}
      ></input>
      <div className={styles.searchButton} onClick={clickSearchButton}>
        검색
      </div>
    </div>
  );
}

export default SearchBar;
