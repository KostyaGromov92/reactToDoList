import {notesActionsType} from './NotesConstants';
import _ from 'lodash';

const initialState = {
  note : {
    id: null,
    title: '',
    description: ''
  },
  arr: []
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case notesActionsType.ADD_NEW_NOTE:
      return {
          ...state,
          arr: [...state.arr.concat(action.payload)],
      };

    case notesActionsType.CHANGE_FIELD_NAME:
      return {
        ...state,
        note: {
            ...state.note,
            [action.payload.fieldName] : action.payload.value
        },
      };

    case notesActionsType.CLEAR_FORM:
      return {
        ...state,
        note: {
            ...initialState.note
        }
      };


    case notesActionsType.UPDATE_ARR_AFTER_DELETE:
      return {
        ...state,
        arr: [...state.arr.slice(0,action.payload), ...state.arr.slice(action.payload + 1)]
      };

    case notesActionsType.NOTE_ID:
      const id = _.uniqueId("prefix-");
      return {
        ...state,
        note: {
          ...state.note,
          id : id
        },
      };

    default:
      return state;
  }
}