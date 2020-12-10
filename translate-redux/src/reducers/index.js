import { combineReducers } from 'redux';

const languageReducer = (state = 'english', action) => {
  switch (action.type) {
    case 'SELECT_LANGUAGE':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  language: languageReducer,
});
