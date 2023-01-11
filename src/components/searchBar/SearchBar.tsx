import { sickName, sickState } from '../../store/atom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styles from './SearchBar.module.css';
import React, { ChangeEvent } from 'react';
import { getSickList } from '../../lib/api/getSickList';

function SearchBar() {
  const [recoilSickName, setRecoilSickName] = useRecoilState(sickName);
  const setRecoilSickState = useSetRecoilState(sickState);

  const changeSickName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRecoilSickName(value);
  };

  const clickSearchButton = async (e: React.MouseEvent) => {
    try {
      const response = await getSickList(recoilSickName);
      if (response.length >= 7) {
        response.length = 7;
        setRecoilSickState(response);
      }
    } catch {
      alert('데이터를 불러오지 못했습니다. 관리자에게 문의해주세요.');
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
