import { combineReducers } from 'redux';
import {responsive} from './reducers/responsive';
import { StoreNameSpace } from '../assets/js/const';

export default combineReducers({
  [StoreNameSpace.RESPONSIVE]: responsive,
});
