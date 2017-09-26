import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Notes from '../notes/Notes'
import './main-style.sass'
import * as notesAction from '../notes/NotestActions';


class MainTemplate extends Component {

  constructor(props) {
    super(props);
  }


  changeTitle = (e) => {
    this.props.notesActions.changeField('title', e.target.value);

  };

  changeDescription = (e) => {
    this.props.notesActions.changeField('description', e.target.value);
  };


  addNote = () => {

    const {notes, notesActions} = this.props;

    if(notes.note.title !== '' && notes.note.description !== '') {
      notesActions.addNewNote({title: notes.note.title, description: notes.note.description});

      notesActions.clearForm();

    }
  };

  deleteNote = (id) => {
    const {notesActions} = this.props;

    notesActions.deleteNote(id);
  };

  updateNote = (id) => {
    const {notesActions} = this.props;

    notesActions.updateNote(id);
  };

  updateNoteFromForm = (note) => {
    const {notesActions} = this.props;

    notesActions.updateNoteFromForm(note);

    notesActions.clearForm();
  };

  render() {

    const {notes} = this.props;

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
                  value={notes.note.description}
                  placeholder="Please enter note description"
              />
            </div>
            <div className="wrapper-buttons">
              {notes.showUpdate
                  ? <button onClick={() => this.updateNoteFromForm(notes.note)} className="btn-save">Update note</button>
                  : <button onClick={this.addNote} className="btn-save">Add note</button>
              }
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
