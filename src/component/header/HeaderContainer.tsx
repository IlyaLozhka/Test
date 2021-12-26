import { connect } from 'react-redux';
import { Header } from './Header';
import { IStore } from '../../redux/types';
import { Dispatch } from 'react';
import { IAction } from '../../redux/authorizationReducer/types';
import { setAuth } from '../../redux/authorizationReducer/action-creator';

interface IMapState {
  readonly isAuth: boolean;
}
interface IMapDispatch {
  setLogout: (value:boolean) => void;
}

const mapStateToProps = (state:IStore):IMapState => {
  return {
    isAuth: state.authorizationReducer.isAuth
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>):IMapDispatch => {
  return {
    setLogout: (value:boolean) => dispatch(setAuth(value))
  }
}


export type IProps = IMapState & IMapDispatch;

export const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header)