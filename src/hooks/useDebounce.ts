import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay = 1000) => {
  const [debounceVal, setdebounceVal] = useState<String>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebounceVal(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceVal;
};

export default useDebounce;
