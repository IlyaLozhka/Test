import React, { FC, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

interface RoutesConfigProps {
  routes: Array<{
    path: string;
    element: ReactNode;
  }>;
}

export const RoutesConfig:FC<RoutesConfigProps> =({routes}) => {

  return (
    <div>
      <Routes>
        {
          routes.map((element) => <Route key={element.path} path={element.path} element={element.element}/>)
        }
      </Routes>
    </div>
  )
};