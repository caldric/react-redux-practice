import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const languageReducer = (state = 'english', action) => {
  switch (action.type) {
    case 'SELECT_LANGUAGE':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  language: languageReducer,
});
