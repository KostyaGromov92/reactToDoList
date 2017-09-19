import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import notesReducer from './components/notes/NotestReducer';

export default combineReducers({
  form: formReducer,
  notesReducer
});