import {notesActionsType} from './NotesConstants';
import _ from 'lodash';

const initialState = {
  arr: []
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case notesActionsType.ADD_NEW_NOTE:
      return {
          ...state,
          arr: action.payload
      };

    default:
      return state;
  }
}