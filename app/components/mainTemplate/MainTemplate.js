import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Notes from '../notes/Notes'
import './main-style.sass'

class MainTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      arr: []
    }
  }

  changeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  changeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  render() {

    const {title, description} = this.props;

    return (
        <div>
          <div className="wrapper-block">
            <div className="wrapper-title">
              <input
                  type="text"
                  onChange={this.changeTitle.bind(this)}
                  value={this.state.title}
                  className="input-title"
              />
            </div>
            <div className="wrapper-description">
              <textarea
                  name="description"
                  className="task-description"
                  onChange={this.changeDescription.bind(this)}
                  value={this.state.description}
              />
            </div>
            <div className="wrapper-buttons">
              <button className="btn-save">Add note</button>
            </div>
          </div>
          <div className="notes-wrapper">
            <Notes
                title={{}}
                description={{}}
            />
          </div>
        </div>
    );
  }
}

export default MainTemplate;