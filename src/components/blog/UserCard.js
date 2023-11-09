import React from 'react';

const UserCard = (props) => {
  return (
    <div className="user-card">
      <div className="user-card-content">
        <div className="user-card-content-header"></div>
        <div className="user-card-content-description">{props.children}</div>
      </div>
      <div className="user-card-bottom-button">
        <i className="user-card-bottom-button-add-icon">Add Friend</i>
      </div>
    </div>
  );
};

export default UserCard;
