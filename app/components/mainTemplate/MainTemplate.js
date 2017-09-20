import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Notes from '../notes/Notes'
import './main-style.sass'
import * as notesAction from '../notes/NotestActions';
import Particles from 'react-particles-js';

class MainTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      arr: []
    }
  }

  changeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  changeDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  };

  editNote = () => {
    this.props.notes.arr.map((item) => {
      this.setState({
        title: item.title,
        description: item.description
      });
    });
  };

  addNotes = () => {
    if(this.state.title !== '' && this.state.description !== '') {
      //{title: this.state.title, description: this.state.description} - это будет доступно в нашем actions, в свойстве payload
      this.props.notesActions.addNewNote({title: this.state.title, description: this.state.description});

      this.setState({
        title: '',
        description: '',
      });

    } else {
      return false;
    }
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
                  value={this.state.title}
                  className="input-title"
                  placeholder="Please enter note title"
              />
            </div>
            <div className="wrapper-description">
              <textarea
                  name="description"
                  className="task-description"
                  onChange={this.changeDescription}
                  value={this.state.description}
                  placeholder="Please enter note description"
              />
            </div>
            <div className="wrapper-buttons">
              <button onClick={this.addNotes} className="btn-save">Add note</button>
            </div>
          </div>
          <Notes
              arr={notes.arr}
              onClickEdit={this.editNote}
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
