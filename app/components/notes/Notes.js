import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Notes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>From Notes</div>
    )
  }
}

Notes.propTypes = {
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
};

export default Notes;