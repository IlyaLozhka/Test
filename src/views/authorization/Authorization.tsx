import React, { FC, useState } from 'react';
import style from './Authorization.module.css';
import { MOCK_USER } from '../../constatnts/userMock';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { AUTH_TYPE } from '../../redux/authorization/actions';


export interface AuthorizationProps {
	closeModal: () => void;
}

export const Authorization: FC<AuthorizationProps> = ({ closeModal }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (password === MOCK_USER.password && email === MOCK_USER.email) {
			dispatch({
				type: AUTH_TYPE.SET_AUTH,
				payload: {
					email: email,
					password: password,
					userName: 'Test User',
					role: 'Admin',
					isAuth: true,
				},
			});
		} else {
			setError('Ups! Invalid password or email');
		}
	};

	return (
		<div className={style.authWrapper}>
			<div className={style.label}>
				<span>
					{<h2> Authorization</h2>  }
				</span>
				<div className={style.line} />
			</div>

			<div className={style.formWrapper}>
				<form name='authorization'>
					<div className={style.formChildren}>
						<input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type='email'
							placeholder={'Enter your email'}
						/>
					</div>

					<div className={style.formChildren}>
						<input
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							type='password'
							placeholder={'Enter your password'}
						/>
					</div>

					<div
						className={classNames(
							style.authButton,
							style.formChildren,
							style.submit
						)}
						onClick={onSubmit}>
						Login
					</div>
				</form>
			</div>

			{error && <div className={style.error}>{error}</div>}

			<div className={style.authButton} onClick={closeModal}>
				Cancel
			</div>
		</div>
	);
};
