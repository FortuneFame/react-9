import { useEffect } from 'react';

const useTime = () => {
  useEffect(() => {
    console.log(`I was called at: ${new Date().toISOString()}`);
  }, []);
};

export default useTime;
