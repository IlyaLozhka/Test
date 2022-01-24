
import React, { FC } from 'react';

import style from './AppInitial.module.css';
import { Logo } from './component/shared/Logo';
import { Header } from './views/header/Header';
import { Footer } from './views/footer/Footer';
import { PreloaderProvider } from './component/preloader/PreloaderContext';
import { NotificationProvider } from './component/notification/NotificationContext';
import { IdleProvider } from './component/timer/TimerContext/IdlContext';

export const AppInitial: FC = ({ children }) => {
  return (
    <div className={style.appWrapper}>
     <IdleProvider>
       <NotificationProvider>
         <PreloaderProvider>
           <Header logo={<Logo />} />
           {children}
           <Footer />
         </PreloaderProvider>
       </NotificationProvider>
     </IdleProvider>

    </div>
  );
};
