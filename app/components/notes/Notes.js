import React from 'react';
import PropTypes from 'prop-types';
import './notes.sass'

const Notes = (props) => (
    <div className="wrapper-notes">
      {props.arr && props.arr.map((item, index) => {
        return (
            <div key={index} className="notes-item">
              <h4 className="notes-title">{item.title}</h4>
              <div className="notes-text">
                {item.description}
              </div>
            </div>
        )
      })}
    </div>
);

Notes.propTypes = {
  arr: PropTypes.array.isRequired,
};

export default Notes;