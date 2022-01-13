import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import { Preloader } from './Preloader';

interface PreloaderContextValues {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

interface PreloaderProviderProps {
  children: ReactNode;
}

const PreloaderContext = createContext<PreloaderContextValues | undefined>(undefined);

export const usePreloaderContext = (): PreloaderContextValues => {
  const c = useContext(PreloaderContext);
  if (!c) throw new Error('usePreloaderContext should be inced PreloaderProvider');
  return c;
};

export const PreloaderProvider: FC<PreloaderProviderProps> = ({ children }) => {

  const [isLoading, setLoading] = useState<boolean>(false);

  const values = {
    isLoading,
    setLoading
  };

  return (
    <PreloaderContext.Provider value={values}>
      {
        isLoading ? <Preloader />
          : null
      }
      {children}
    </PreloaderContext.Provider>
  );
};
