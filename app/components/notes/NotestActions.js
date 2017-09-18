import {notesActionsType} from './NotesConstants';

export function addNewNote(data) {
  return {
    type: notesActionsType.ADD_NEW_NOTE,
    payload: data,
  };
}