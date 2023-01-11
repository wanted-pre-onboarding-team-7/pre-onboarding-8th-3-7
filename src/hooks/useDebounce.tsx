import { useEffect, useState } from 'react';
import { DEFAULT_DELAY } from '../utils/constants';

const useDebounce = (value: string) => {
  const [debounceVal, setdebounceVal] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebounceVal(value);
    }, DEFAULT_DELAY);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debounceVal;
};

export default useDebounce;
