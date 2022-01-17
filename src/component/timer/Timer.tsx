import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import style from './Timer.module.css';
import { Continue } from '../buttons/timerButton/Continue';
import { LoginButton } from '../buttons/LoginButton';

interface TimerProps {
  initialMinute: number;
  initialSeconds: number;
  closeModal: () => void;
  logout: () => void;
}

export const Timer: FC<TimerProps> = ({ initialMinute, initialSeconds, closeModal, logout }) => {

  const [minutes, setMinutes] = useState<number>(initialMinute);
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  const endSession = () => {
    logout();
    closeModal();
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          endSession();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className={style.wrapper}>
      <div className={style.timerWrapper}>
        {
          minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ? '0' + seconds : seconds}</h1>
        }
      </div>
      <div className={style.buttonWrapper}>
        <LoginButton handleClick={endSession} label={'Logout'} />
        <Continue handleClick={closeModal} />
      </div>

    </div>
  );
};
