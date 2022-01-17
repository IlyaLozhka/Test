import React, { useCallback } from 'react';

let time = 0;

export const useMoveListener = (setterFn: React.Dispatch<React.SetStateAction<boolean>>) => {

  return useCallback(() => {
    setInterval(() => {
      time += 1;
    }, 30);

    setInterval(() => {
      if (time > 5) {
        setterFn(true);
      }
    }, 1000);

    document.addEventListener('mousemove', () => {
      time = 0;
    });
    document.addEventListener('keypress', () => {
      time = 0;
    });
  }, [time]);

};

