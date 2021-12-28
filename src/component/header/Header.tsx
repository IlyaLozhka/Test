import React, { FC, useCallback, useState, ReactNode } from 'react';
import style from './Header.module.css';
import { Authorization } from '../modal/authorization/Authorization';
import { useAuth } from '../../redux/authorization/selector';
import { useNavigate } from 'react-router-dom';

export interface HeaderProps {
	logo: ReactNode;
}

export const Header: FC<HeaderProps> = ({ logo }) => {
	const { auth } = useAuth();
	const navigate = useNavigate();
	const [modalOpen, setModal] = useState<boolean>(false);

	const login = () => setModal(true);
	const logout = () => setModal(false);
	const closeModal = () => setModal(false);

	return (
		<div className={style.headerWrapper}>
			{modalOpen && !auth.isAuth ? (
				<Authorization closeModal={() => closeModal()} />
			) : null}
			<div className={style.navigation}>
				<div className={style.logotype}>{logo}</div>
				{auth.isAuth ? (
					<div className={style.navigationButtonWrapper}>
						<button onClick={() => navigate('/home')}>Home</button>
						<button onClick={() => navigate('/user')}>User</button>
						<button onClick={() => navigate('/transactions')}>
							Transactons
						</button>
					</div>
				) : null}
			</div>

			<div>
				{auth.isAuth ? (
					<div className={style.logButton} onClick={logout}>
						Logout
					</div>
				) : (
					<div className={style.logButton} onClick={login}>
						Login
					</div>
				)}
			</div>
		</div>
	);
};
