import {notesActionsType} from './NotesConstants';

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
      console.log(action);
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

    default:
      return state;
  }
}