import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
  //TODO: 검색창 기능 구현
  const submitKeyword = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    console.log('제출!', evt.currentTarget.value);
  };

  const onChangeKeyword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.currentTarget.value);
  };

  return (
    <form className={styles.container} onSubmit={submitKeyword}>
      <div className={styles.searchBox}>
        <label htmlFor={styles.searchInput}>🔎</label>
        <input id={styles.searchInput} type="type" onChange={onChangeKeyword} />
      </div>
      <button type="submit" className={styles.searchBtn}>
        검색
      </button>
    </form>
  );
}

export default SearchBar;
