import React, { FunctionComponent } from 'react';
import { Accordion } from '../../component/accordion/Accordion';
import style from './UserPage.module.css';

const accordionData = [{
  title: 'first',
  content: 'asdklasld ad a klsdal naldn aldksn ald alskdn '
}, {
  title: 'sec',
  content: 'asdklasld ad a klsdal naldn aldksn ald alskdn '
}, {
  title: 'third',
  content: 'asdklasld ad a klsdal naldn aldksn ald alskdn '
}, {
  title: '4',
  content: 'asdklasld ad a klsdal naldn aldksn ald alskdn '
}, {
  title: 'fifve',
  content: 'asdklasld ad a klsdal naldn aldksn ald alskdn '
}, {
  title: 'sixs',
  content: 'asdklasld ad a klsdal naldn aldksn ald alskdn '
}, {
  title: 'seven',
  content: 'asdklasld ad a klsdal naldn aldksn ald alskdn '
}];


export const UserPage: FunctionComponent = () => {
  return (<div className={style.wrapper}>
    {
      accordionData.map(({ title, content }, index) => {
        return (<div key={index}>
            <Accordion title={title} content={content} />
          </div>
        );
      })
    }
  </div>);
};
