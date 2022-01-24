import React, { FC } from 'react';
import { useState } from 'react';
import style from './Timer.module.css';
import { LoginButton } from '../buttons/LoginButton';
import { useInterval } from '../shared/hooks/useInterval';
import ReactDOM from 'react-dom';
import { Continue } from '../buttons/Continue';

interface TimerProps {
  readonly open: boolean;
  readonly stayLoggedIn: () => void;
  readonly logOff: () => void;
}

const initialValues = 100;

let rootModal = document.createElement('div');
rootModal.id = 'rootModal';
document.body.appendChild(rootModal);

export const IdleModal: FC<TimerProps> = ({ stayLoggedIn, logOff }) => {

  const [seconds, setSeconds] = useState<number>(initialValues);

  useInterval(() => {
    seconds ? setSeconds(seconds - 1) : logOff();
  }, 1000);

  return ReactDOM.createPortal(
    <div className={style.wrapper}>
      <div className={style.timerWrapper}>
        {
          seconds === 0
            ? null
            : <h1> 0:{seconds < 10 ? '0' + seconds : seconds}</h1>
        }
      </div>
      <div className={style.buttonWrapper}>
        <LoginButton handleClick={logOff} label={'Logout'} />
        <Continue handleClick={stayLoggedIn} />
      </div>

    </div>,
    rootModal
  );
};
