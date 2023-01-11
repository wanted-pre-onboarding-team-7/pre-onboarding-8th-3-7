import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 500;

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
