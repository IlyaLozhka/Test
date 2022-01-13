import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import { Notification } from './Notification';

interface NotificationContextValues {
  errors: string;
  success: string;
  setErrors: React.Dispatch<React.SetStateAction<string>>;
  setSuccess: React.Dispatch<React.SetStateAction<string>>;
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

  const [errors, setErrors] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleClearNotification = () => {
    setErrors('');
    setSuccess('');
  };

  const value = {
    errors,
    setErrors,
    success,
    setSuccess
  };

  return (
    <NotificationContext.Provider value={value}>
      {
        errors || success ?
          <Notification errors={errors} success={success} handleClearNotification={handleClearNotification} /> : null
      }
      {children}
    </NotificationContext.Provider>
  );
};