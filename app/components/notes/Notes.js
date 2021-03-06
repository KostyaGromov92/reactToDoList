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
                {item.body}
              </div>
              <div className="notes-edit">
                <button onClick={() => props.onClickDelete(item.id)} className="btn-delete-note">Delete</button>
                <button onClick={() => props.onClickUpdate(item.id)} className="btn-update-note">Update</button>
              </div>
            </div>
        )
      })}
    </div>
);

Notes.propTypes = {
  arr: PropTypes.array.isRequired,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
  onClickUpdate: PropTypes.func,
};

export default Notes;