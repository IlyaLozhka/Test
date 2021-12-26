import Content from './Content';
import { connect } from 'react-redux';
import { IStore } from '../../redux/types';

interface IMapState {
  readonly isAuth: boolean
}

const mapStateToProps = (state:IStore):IMapState => {
  return {
    isAuth: state.authorizationReducer.isAuth
  }
}

export type IProps = IMapState
export const ContentContainer = connect(mapStateToProps)(Content)