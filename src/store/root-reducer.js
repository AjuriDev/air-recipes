import { combineReducers } from 'redux';
import { responsive } from './reducers/responsive';
import { recipes } from './reducers/recipes';
import {recipe} from './reducers/recipe';
import { StoreNameSpace } from '../assets/js/const';

export default combineReducers({
  [StoreNameSpace.RESPONSIVE]: responsive,
  [StoreNameSpace.RECIPES]: recipes,
  [StoreNameSpace.RECIPE]: recipe,
});
