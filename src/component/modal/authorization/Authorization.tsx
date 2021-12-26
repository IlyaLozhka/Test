import React, { FunctionComponent, useState } from 'react';
import styles from'./Authorization.module.css';
import ReactDOM from 'react-dom';
import { MOCK_USER } from '../../../constatnts/userMock';
import { IProps } from './AuthorizationContainer';

let rootModal = document.createElement('div');
rootModal.id = 'rootModal';
document.body.appendChild(rootModal);

export const Authorization: FunctionComponent<IProps> = ({setAuth, onModalClose}) => {

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (password === MOCK_USER.password && email === MOCK_USER.email) {
			setAuth(true);
		} else {
			alert('wrong user or password');
		}
	};

	return ReactDOM.createPortal(
		<div className={styles.authWrapper}>

			<div className={styles.closeButton}>
				<button onClick={onModalClose}>
					X
				</button>
			</div>

			<form onSubmit={onSubmit}>
				<div>
					<input onChange={(e) => {	setEmail(e.target.value); }}
						type='email'
						placeholder={'Enter your email'}
					/>
				</div>
				<div>
					<input onChange={(e) => { setPassword(e.target.value);	}}
						type='password'
						placeholder={'Enter your password'}
					/>
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>,
		rootModal
	);
};
