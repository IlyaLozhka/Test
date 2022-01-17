import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import { Notification } from './Notification';

interface NotificationContextValues {
  errorsMessage: string;
  successMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
}

interface NotificationContextProps {
  children: ReactNode;
}

const NotificationContext = createContext<NotificationContextValues | undefined>(undefined);

export const useNotificationContext = (): NotificationContextValues => {
  const c = useContext(NotificationContext);
  if (!c) throw new Error('useNotificationContext should be inced NotificationProvider');
  return c;
};

export const NotificationProvider: FC<NotificationContextProps> = ({ children }) => {

  const [errorsMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleClearNotification = () => {
    setErrorMessage('');
    setSuccessMessage('');
  };

  const value = {
    errorsMessage,
    setErrorMessage,
    successMessage,
    setSuccessMessage
  };

  return (
    <NotificationContext.Provider value={value}>
      {
        errorsMessage || successMessage ?
          <Notification errors={errorsMessage} success={successMessage} handleClearNotification={handleClearNotification} /> : null
      }
      {children}
    </NotificationContext.Provider>
  );
};