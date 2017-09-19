import {notesActionsType} from './NotesConstants';

const initialState = {
  title: '',
  description: '',
  arr: []
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case notesActionsType.ADD_NEW_NOTE:
      console.log(action);
      return {
          ...state,
          arr: [...state.arr.concat(action.payload)],
      };

    default:
      return state;
  }
}