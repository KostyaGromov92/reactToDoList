import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Notes extends Component {

  render() {

    const {title, description} = this.props;

    return (
        <div>
          <h1>From notes</h1>
          <h3>{title}</h3>
          {description}
        </div>
    )
  }
}

Notes.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Notes;