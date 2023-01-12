import React from 'react';
import styles from './SearchBar.module.css';

type SearchProps = {
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

function SearchBar({ onFocus, onBlur, onChange, onKeyDown }: SearchProps) {
  //TODO: 검색창 기능 구현

  return (
    <div className={styles.container}>
      <div className={styles['input-container']}>
        <input
          className={styles['search-input']}
          type="text"
          placeholder="질환명을 입력해 주세요."
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button className={styles['search-btn']}>
          <svg
            viewBox="0 0 16 16"
            width="24px"
            height="24px"
            fill="white"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
