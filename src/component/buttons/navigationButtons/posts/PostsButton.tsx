import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../../Button.module.css';


export const PostsButton:FC = () => {
  const navigate = useNavigate();

  return (
    <div  onClick={() => navigate('/posts')} className={style.button}>
        Posts
    </div>
  )
};