import { useEffect, useRef } from 'react';

type TimeoutFunction = () => unknown | void;

export const useTimeout = (callback: TimeoutFunction, delay: number): void => {

  const savedCallback = useRef<TimeoutFunction | null>(null);

// Remember the latest callback.

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
// Set up the interval.

  useEffect(() => {
    function tick(): void {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }

    const id = setTimeout(tick, delay);
    return () => clearTimeout(id);
  }, [delay]);

};