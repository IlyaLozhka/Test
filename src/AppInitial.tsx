import React, { FunctionComponent } from 'react';
import style from './AppInitial.module.css';
import { Logo } from './component/shared/Logo';
import { Header } from './views/header/Header';
import { Footer } from './views/footer/Footer';
import { PreloaderProvider } from './component/preloader/PreloaderContext';
import { NotificationProvider } from './component/notification/NotificationContext';


export const AppInitial: FunctionComponent = ({ children }) => {
  return (
    <div className={style.appWrapper}>
      <NotificationProvider>
        <PreloaderProvider>
          <Header logo={<Logo />} />
          {children}
          <Footer />
        </PreloaderProvider>
      </NotificationProvider>
    </div>
  );
};
