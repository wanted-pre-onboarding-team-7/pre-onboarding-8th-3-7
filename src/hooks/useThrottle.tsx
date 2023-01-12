import { useState } from 'react';
import { THROTTLE_DELAY } from '../utils/constants';

const useThrottle = (cb: (arg: any) => void) => {
  const [isWait, setIsWait] = useState<boolean>(false);

  return (arg: any) => {
    if (isWait) return;
    cb(arg);
    setIsWait(true);
    setTimeout(() => {
      setIsWait(false);
    }, THROTTLE_DELAY);
  };
};

export default useThrottle;
