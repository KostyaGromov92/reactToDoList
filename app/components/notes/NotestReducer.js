import {notesActionsType} from './NotesConstants';
import newid from '../newid';
import _ from 'lodash';


const initialState = {
  note : {
    id: null,
    title: '',
    body: '',
    search: '',
  },
  arr: [],
  showUpdate: false,

};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {

    case notesActionsType.GET_NOTES_SUCCESS:
      return {
        ...state,
        arr: action.payload.arr
      };

    case notesActionsType.NOTES_REQUEST_ERROR:
      return {
        ...state,
        arr: state.arr
      };

    case notesActionsType.ADD_NEW_NOTE:
      debugger;
      return {
          ...state,
          arr: [...state.arr.concat({...action.payload, id : newid(state.arr)})],
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

    case notesActionsType.DELETE_NOTE:
      return {
        ...state,
        arr: [...state.arr.filter((el) => {
            return el.id !== action.payload;
        })]
      };

    case notesActionsType.UPDATE_NOTE:
      return {
        ...state,
        note: action.array.find(item => item.id === action.noteId),
        showUpdate: true,
      };

    case notesActionsType.UPDATE_NOTE_FROM_FORM:
      return {
        ...state,
        arr: [...state.arr.map(item => {
          if(item.id === action.payload.id) {
            return {...action.payload}
          }
          return {...item};
        })],
        showUpdate: false,
      };

    case notesActionsType.FIND_NOTE:
      //debugger;
      return {
        ...state,
        arr: [...state.arr.filter(el => {
          return el.title === action.payload
        })]
      };

    default:
      return state;
  }
}