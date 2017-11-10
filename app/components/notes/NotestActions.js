import {notesActionsType} from './NotesConstants';

export function addNewNote(data) {
  return {
    type: notesActionsType.ADD_NEW_NOTE,
    payload: data,
  }
}

export function getNotesRequest(data) {
  return {
    type: notesActionsType.GET_NOTES_REQUEST,
    payload: data,
  };
}

export function getNotesSuccess(data) {
  return {
    type: notesActionsType.GET_NOTES_SUCCESS,
    payload: data,
  };
}

export function getNotesRequestError(errors) {
  return {
    type: notesActionsType.NOTES_REQUEST_ERROR,
    error: true,
    payload: errors,
  };
}

export function changeField(fieldName, value) {
  return {
    type: notesActionsType.CHANGE_FIELD_NAME,
    payload: {fieldName, value},
  }
}

export function clearForm() {
  return {
    type: notesActionsType.CLEAR_FORM,
  }
}

export function deleteNote(noteId) {
  return {
    type: notesActionsType.DELETE_NOTE,
    payload: noteId
  }
}

export function updateNote(noteId, array) {
  return {
    type: notesActionsType.UPDATE_NOTE,
    noteId,
    array
  }
}

export function updateNoteFromForm(note) {
  return {
    type: notesActionsType.UPDATE_NOTE_FROM_FORM,
    payload: note
  }
}

export function findNote(search) {
  return {
    type: notesActionsType.FIND_NOTE,
    payload: search,
  }
}


export default {addNewNote, clearForm, changeField, updateNote, deleteNote, updateNoteFromForm, findNote};