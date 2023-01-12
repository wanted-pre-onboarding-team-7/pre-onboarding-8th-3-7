import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  inputValueState,
  keyboardState,
  KeyboardState,
} from '../../store/atom';
import { IResultItem } from '../../utils/type';
import styles from './ResultItem.module.css';

const ResultItem: React.FC<IResultItem> = ({ result, index }) => {
  const keyboard = useRecoilValue<KeyboardState>(keyboardState);
  const [isSelected, setIsSelected] = useState(false);
  const setinputValue = useSetRecoilState(inputValueState);

  useEffect(() => {
    if (keyboard.index === index) {
      setIsSelected(true);
      if (keyboard.isSelected) {
        setinputValue(result.sickNm);
      }
      return;
    }
    setIsSelected(false);
  }, [keyboard, index, result.sickNm, setinputValue]);

  return (
    <li
      id={`option-${index}`}
      className={isSelected ? styles.selectedListItem : styles.listItem}
    >
      <span>🔍</span>
      <div>
        <span>{result.notBold[0]}</span>
        <span className={styles.bold}>{result.bold}</span>
        <span>{result.notBold[1]}</span>
      </div>
    </li>
  );
};

export default ResultItem;
