import React, { useState, useRef, KeyboardEvent } from 'react';

type KeyboardProps = [
  currentIndex: number,
  ulRef: React.RefObject<HTMLUListElement>,
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void,
];

export default function useKeyboard(
  dataLength: number,
  setKeyword: React.Dispatch<React.SetStateAction<string>>,
): KeyboardProps {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const ulRef = useRef<HTMLUListElement>(null);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (dataLength > 0) {
      switch (e.key) {
        case 'ArrowDown':
          setCurrentIndex(currentIndex + 1);
          if (ulRef.current?.childElementCount === currentIndex + 1)
            setCurrentIndex(0);
          break;
        case 'ArrowUp':
          setCurrentIndex(currentIndex - 1);
          if (currentIndex <= 0) {
            setCurrentIndex(ulRef.current!.childElementCount - 1);
          }
          break;
        case 'Enter':
          setKeyword(
            ulRef.current?.children[currentIndex].textContent as string,
          );
          break;
      }
    }
  };

  return [currentIndex, ulRef, handleKeyPress];
}
