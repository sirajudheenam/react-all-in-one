import React from 'react';
import styles from './styles.module.css';


const UserCard = ({ children }) => {
  return (
    <div className={styles.userCard}>
      <div className="userCardContent">
        <div className="userCardContentHeader"></div>
        <div className="userCardContentHescription">{children}</div>
      </div>
      <div className="userCardBottomButton">
        <i className="userCardBottomButtonAddIcon">Add Friend</i>
      </div>
    </div>
  );
};

export default UserCard;
