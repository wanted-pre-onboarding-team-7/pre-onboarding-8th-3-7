import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { stateIsLoading } from '../store/atoms';

const useDebounce = (value: string, delay = 1000) => {
  const [debounceVal, setdebounceVal] = useState<String>(value);
  const setIsLoading = useSetRecoilState(stateIsLoading);

  useEffect(() => {
    setIsLoading(true);
    const handler = setTimeout(() => {
      setdebounceVal(value);
      setIsLoading(false);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceVal;
};

export default useDebounce;
