import React, { FC, useState } from 'react';
import style from './Accordion.module.css';
import arrow from './../../assets/img/arrow.svg';

interface AccordionProps {
  title: string;
  content: string;
}

export const Accordion: FC<AccordionProps> = ({ title, content }) => {
  const [isActive, setActive] = useState<boolean>(false);

  const accordionSetter = () => setActive(!isActive);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <div>
          {title}
        </div>
        <div onClick={accordionSetter}>
          {
            <img  className={style.toggle} aria-expanded={isActive} src={arrow} alt='arrow' />
          }
        </div>
      </div>
      {isActive &&
        <div className={style.content} aria-expanded={!isActive}>
          {content}
        </div>
      }
    </div>
  );
};