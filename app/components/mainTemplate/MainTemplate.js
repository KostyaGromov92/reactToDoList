import React from 'react';

import './main-style.sass'

class MainTemplate extends React.Component {

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

    return (
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
            <button onClick={this.addNewItem.bind(this)} className="btn-save">Add note</button>
          </div>
        </div>
    );
  }
}

export default MainTemplate;