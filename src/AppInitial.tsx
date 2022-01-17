import React, { FC, useEffect, useState } from 'react';
import style from './AppInitial.module.css';
import { Logo } from './component/shared/Logo';
import { Header } from './views/header/Header';
import { Footer } from './views/footer/Footer';
import { PreloaderProvider } from './component/preloader/PreloaderContext';
import { NotificationProvider } from './component/notification/NotificationContext';
import { ModalContainer } from './component/modal/ModalContainer';
import { Timer } from './component/timer/Timer';
import { useMoveListener } from './component/shared/utils/useMoveListener';
import { useLogout } from './component/shared/hooks/useLogout';

export const AppInitial: FC = ({ children }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const timer = useMoveListener(setModalOpen);
  const closeModal = () => setModalOpen(false);
  const handleLogout = useLogout();

  useEffect(() => {
    timer();
  }, []);

  return (
    <div className={style.appWrapper}>
      {
        modalOpen ? <ModalContainer
          component={<Timer initialMinute={0}
                            initialSeconds={10}
                            closeModal={() => closeModal()}
                            logout={() => handleLogout}
          />} /> : null
      }
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
