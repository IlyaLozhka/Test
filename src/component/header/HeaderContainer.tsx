import { connect } from 'react-redux';
import { Header } from './Header';
import { IStore } from '../../redux/types';
import { Dispatch } from 'react';
import { IAction } from '../../redux/authorizationReducer/types';
import { setAuth } from '../../redux/authorizationReducer/actionCreator';
import { IPages } from './types';

interface IMapState {
  readonly isAuth: boolean;
}
interface IMapDispatch {
  setLogout: (value:boolean) => void;
}

interface IOwnProps {
  readonly pages: Array<IPages>;
  readonly logo: string;
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


export type IProps = IMapState & IMapDispatch & IOwnProps;

export const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header)