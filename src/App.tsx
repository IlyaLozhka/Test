import React, { FC } from 'react';
import { Content } from './views/content/Content';
import { MyProjectRoutes } from './views/myProjectRoutes';


export const App:FC = () => {

  return (
      <Content>
        <MyProjectRoutes/>
      </Content>
  )
};