import  { useEffect, useState } from 'react';
import { useAuth } from '../../../redux/authorization/selector';

const TIME = 5; // * 1000

interface Idle {
  timer: number;
  resetUserTimer: () => void;
}
export const useIdle = (): Idle => {
  const [timer, setTimer] = useState<number>(TIME);
  const { auth } = useAuth();

  const resetUserTimer = (): void => setTimer(TIME);

  useEffect(() => {
    if (auth.isAuth) {
      const myTimeout = setTimeout(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        }
      }, 1000);

      document.getElementById('root')?.addEventListener('click', resetUserTimer);

      return () => {
        clearTimeout(myTimeout);
        document.getElementById('root')?.removeEventListener('click', resetUserTimer);
      };
    }
  });

  return { timer, resetUserTimer };

};
