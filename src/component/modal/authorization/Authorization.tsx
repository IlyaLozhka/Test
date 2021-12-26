import React, { FunctionComponent, useState } from 'react';
import styles from './Authorization.module.css';
import ReactDOM from 'react-dom';
import { MOCK_USER } from '../../../constatnts/userMock';
import { IProps } from './AuthorizationContainer';
import classNames from 'classnames';

let rootModal = document.createElement('div');
rootModal.id = 'rootModal';
document.body.appendChild(rootModal);

export const Authorization: FunctionComponent<IProps> = ({ setAuth, onModalClose }) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MOCK_USER.password && email === MOCK_USER.email) {
      setAuth(true);
    } else {
      setError('Ups! Invalid password or email');
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.authWrapper}>
         <div className={styles.label}>
             <span>
               <h2> Authorization</h2>
             </span>
           <div className={styles.line}/>
         </div>

      <div className={styles.formWrapper}>
        <form name='authorization'>
          <div className={styles.formChildren}>
            <input onChange={(e) => { setEmail(e.target.value); }}
                   type='email'
                   placeholder={'Enter your email'} />
          </div>

          <div className={styles.formChildren}>
            <input onChange={(e) => { setPassword(e.target.value); }}
                   type='password'
                   placeholder={'Enter your password'} />
          </div>

          <div className={classNames(styles.authButton, styles.formChildren, styles.submit)} onClick={onSubmit}>
            Login
          </div>

        </form>
      </div>

      {error && <div className={styles.error}>
          {error}
        </div>}

      <div className={styles.authButton} onClick={onModalClose}>
        Cancel
      </div>

    </div>,
    rootModal
  );
};
