import {processRequest} from '../../api';
import { takeEvery } from 'redux-saga/effects';
import {put, call} from 'redux-saga/effects';
import {notesActionsType} from './NotesConstants';
import * as notesActions from './NotestActions';
import _ from 'lodash';


export function* watchGetNotes() {
  yield takeEvery(notesActionsType.GET_NOTES_REQUEST, handleGetNotes);
}

export function* getNotesId() {
  yield takeEvery(notesActionsType.ADD_NEW_NOTE, handleGetNotesId);
}

export function* handleGetNotes() {
  try {
    const data = yield call(processRequest, '5a042f81310000ac2d916c62');
    yield put(notesActions.getNotesSuccess(data));
  } catch (e) {
    yield put(notesActions.getNotesRequestError(e));
  }
}

export function* handleGetNotesId() {
  try {
    const data = yield call(processRequest, '5a042f81310000ac2d916c62');
    yield put(notesActions.addNewNote(data));
  } catch (e) {
    yield put(notesActions.getNotesRequestError(e));
  }
}