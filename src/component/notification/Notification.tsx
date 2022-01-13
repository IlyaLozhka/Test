import React, { FC, useEffect } from 'react';
import style from './Notification.module.css';
import classNames from 'classnames';

interface NotificationProps {
  errors: string;
  success: string;
  handleClearNotification: () => void;
}

export const Notification: FC<NotificationProps> = ({ handleClearNotification, errors, success }) => {

  useEffect(() => {
    setTimeout(() => {
      handleClearNotification();
    }, 6000);
  }, []);

  return (
    <div>
      {
        errors
          ? <div className={classNames(style.notificationWrapper, style.errors)}>
            {errors}
          </div>
          : null
      }
      {
        success
          ? <div className={classNames(style.notificationWrapper, style.success)}>
            {success}
          </div>
          : null
      }
    </div>
  );
};