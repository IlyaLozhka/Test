import { connect } from 'react-redux';
import { Authorization } from './Authorization';
import { Dispatch } from 'react';
import { setAuth } from '../../../redux/authorizationReducer/action-creator';
import { IAction } from '../../../redux/authorizationReducer/types';



interface IMapDispatch {
	readonly setAuth: (value: boolean) => void;
}

interface IOwnFunc {
	readonly onModalClose: () => void;
}

const mapStateToProps = () => {
	return {

	};
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>, ): IMapDispatch => {
	return {
		setAuth: (value) => dispatch(setAuth(value))
	};
};

export type IProps = IMapDispatch & IOwnFunc ;

export const AuthorizationContainer = connect(mapStateToProps,mapDispatchToProps)(Authorization);
