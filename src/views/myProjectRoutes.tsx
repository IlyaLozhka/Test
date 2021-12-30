import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routeConfig';

export const MyProjectRoutes: FC = () =>
  (<Routes>
      {
        routes.map((route, index) => <Route key={index} path={route.path} element={<route.component />} />)
      }
    </Routes>
  );