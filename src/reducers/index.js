import { combineReducers } from 'redux';
import { CHANGE_DISPLAY, SWITCH_IMAGES } from '../actions/types';

const defaultState = {
  displayCount: 5,
  switchChecked: 2,
};

const tableParams = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_DISPLAY:
      return {
        ...state,
        displayCount: action.displayCount,
      };
    case SWITCH_IMAGES:
      return {
        ...state,
        switchChecked: action.checked,
      };

    default:
      return state;
  }
};

export default combineReducers({
  tableParams,
});
