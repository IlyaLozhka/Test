import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../NavigationButton.module.css';


export const TransactionButton:FC = () => {
  const navigate = useNavigate();

  return (
    <div  onClick={() => navigate('/transaction')} className={style.navigateButton}>
        Transaction
    </div>
  )
};