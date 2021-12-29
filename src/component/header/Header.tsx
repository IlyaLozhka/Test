import React, { FC,  useState, ReactNode } from 'react';
import style from './Header.module.css';
import { Authorization } from '../modal/authorization/Authorization';
import { useAuth } from '../../redux/authorization/selector';
import { HomeButton } from '../navigationButtons/home/HomeButton';
import { UserButton } from '../navigationButtons/user/UserButton';
import { TransactionButton } from '../navigationButtons/transaction/TransactionButton';
import { useDispatch } from 'react-redux';
import { AUTH_TYPE } from '../../redux/authorization/actions';

export interface HeaderProps {
	logo: ReactNode;
}

export const Header: FC<HeaderProps> = ({ logo }) => {
	const { auth } = useAuth();
	const dispatch = useDispatch();

	const [modalOpen, setModal] = useState<boolean>(false);

	const login = () => setModal(true);
	const logout = () => {
		setModal(false);
		dispatch({
			type: AUTH_TYPE.SET_AUTH,
			payload: {
				email: '',
				password: '',
				userName: '',
				role: '',
				isAuth: false,
			},
		})
	}

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
						<HomeButton/>
						<UserButton/>
						<TransactionButton/>
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
