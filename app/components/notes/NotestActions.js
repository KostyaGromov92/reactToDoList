import {notesActionsType} from './NotesConstants';

// export function addNewNote(data) {
//   return (dispatch) => {
//     return dispatch({
//             type: notesActionsType.ADD_NEW_NOTE,
//             payload: data,
//           });
//
//   }
// }

export function addNewNote(data) {
  return {
    type: notesActionsType.ADD_NEW_NOTE,
    payload: data,
  }
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

export default {addNewNote};