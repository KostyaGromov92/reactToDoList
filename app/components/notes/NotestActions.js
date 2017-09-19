import {notesActionsType} from './NotesConstants';

export function addNewNote(data) {
  return (dispatch) => {
    return dispatch({
            type: notesActionsType.ADD_NEW_NOTE,
            payload: data,
          });

  }
}