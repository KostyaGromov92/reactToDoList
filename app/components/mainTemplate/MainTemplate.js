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


  addNotes = () => {

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
              <button onClick={this.addNotes} className="btn-save">Add note</button>
            </div>
          </div>
          <Notes
              arr={notes.arr}
              onClickDelete={this.deleteNote}
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
