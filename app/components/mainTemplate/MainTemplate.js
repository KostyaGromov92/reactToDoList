import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Notes from '../notes/Notes'
import './main-style.sass'
import * as notesAction from '../notes/NotestActions';
import { Form, Text } from 'react-form';


class MainTemplate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      arr: []
    }
  }


  changeTitle = (e) => {
    this.props.notesActions.changeField('title', e.target.value);

  };

  changeDescription = (e) => {
    this.props.notesActions.changeField('body', e.target.value);
  };

  changeSearch = (e) => {
    const {notesActions} = this.props;

    notesActions.changeField('search', e.target.value);
    notesActions.findNote(e.target.value);
  };


  addNote = () => {

    const {notes, notesActions} = this.props;

    if(notes.note.title !== '' && notes.note.body !== '') {
      notesActions.addNewNote({title: notes.note.title, body: notes.note.body});

      notesActions.clearForm();

    }
  };

  deleteNote = (id) => {
    const {notesActions} = this.props;

    notesActions.deleteNote(id);
  };

  updateNote = (id) => {
    const {notesActions} = this.props;

    notesActions.updateNote(id, this.props.notes.arr);
  };

  updateNoteFromForm = (note) => {
    const {notesActions} = this.props;

    notesActions.updateNoteFromForm(note);

    notesActions.clearForm();
  };

  componentDidMount() {

    const {notesActions} = this.props;

    notesActions.getNotesRequest();
  }

  render() {

    const {notes} = this.props;

    console.log(notes);

    return (
        <div>
          <div className="wrapper-block">
            <div className="wrapper-title">
              <input
                  type="text"
                  onChange={this.changeTitle}
                  value={notes.note.title}
                  className="input-title"
                  placeholder="Please enter note title"
              />
            </div>
            <div className="wrapper-description">
              <textarea
                  name="description"
                  className="task-description"
                  onChange={this.changeDescription}
                  value={notes.note.body}
                  placeholder="Please enter note description"
              />
            </div>
            <div className="wrapper-buttons">
              {notes.showUpdate
                  ? <button onClick={() => this.updateNoteFromForm(notes.note)} className="btn-save">Update note</button>
                  : <button onClick={this.addNote} className="btn-save">Add note</button>
              }
            </div>
            <div className="search-block">
              <input
                  type="text"
                  className="search-element"
                  onChange={this.changeSearch}
                  value={notes.note.search}
                  placeholder="Search element"
                  disabled={notes.arr.length <= 0}
              />
            </div>
          </div>
          <Notes
              arr={notes.arr}
              onClickDelete={this.deleteNote}
              onClickUpdate={this.updateNote}
          />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    notes: state.notesReducer, // наш reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    notesActions: bindActionCreators(notesAction, dispatch), // наш action
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate);
