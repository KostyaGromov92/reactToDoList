import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Notes from '../notes/Notes'
import './main-style.sass'
import * as notesAction from '../notes/NotestActions';

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

  addNotes = () => {
    if(this.state.title !== '' && this.state.description !== '') {

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

    return (
        <div>
          <div className="wrapper-block">
            <div className="wrapper-title">
              <input
                  type="text"
                  onChange={this.changeTitle}
                  value={this.state.title}
                  className="input-title"
              />
            </div>
            <div className="wrapper-description">
              <textarea
                  name="description"
                  className="task-description"
                  onChange={this.changeDescription}
                  value={this.state.description}
              />
            </div>
            <div className="wrapper-buttons">
              <button onClick={this.addNotes} className="btn-save">Add note</button>
            </div>
          </div>
          <Notes
              arr={this.props.notes.arr}
          />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    notes: state.notesReducer,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    notesActions: bindActionCreators(notesAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate);
