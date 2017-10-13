import keyMirror from 'keymirror';

export const notesActionsType = keyMirror(
    {
      ADD_NEW_NOTE: null,
      CHANGE_FIELD_NAME: null,
      CLEAR_FORM: null,
      NOTE_ID: null,
      DELETE_NOTE: null,
      UPDATE_NOTE: null,
      UPDATE_NOTE_FROM_FORM: null,
      FIND_NOTE: null,
    },
);
