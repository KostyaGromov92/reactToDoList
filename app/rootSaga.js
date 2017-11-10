import {fork} from 'redux-saga/effects';
import * as notesSaga from './components/notes/NotesSaga';

export default function* rootSaga(store) {
  yield fork(notesSaga.watchGetNotes, store);
  yield fork(notesSaga.getNotesId, store);
}