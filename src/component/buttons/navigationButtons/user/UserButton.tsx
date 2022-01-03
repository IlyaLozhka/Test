import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../../Button.module.css'

export const UserButton:FC = () => {
  const navigate = useNavigate();

  return (
    <div  onClick={() => navigate('/user')} className={style.button}>
        User
    </div>
  )
};