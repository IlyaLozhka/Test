import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../NavigationButton.module.css';


export const HomeButton:FC = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/home')} className={style.navigateButton}>
        Home
    </div>
  )
};