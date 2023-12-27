import React from 'react';
import styles from './styles.module.css';
const SingleComment = (props) => {
  return (
    <div className="blogPostComment">
      <a href="/" className="blogPostCommentAvatar">
        <div className="blogPostCommentAvatar">
          <img
            src={props.picture}
            alt="profile"
            className="blogPostCommentAvatarImage"
          />
        </div>
      </a>
      <div className="blogPostCommentContent">
        <a href="/" className="blogPostCommentContentAuthor">
          {props.name}
        </a>
        <div className="blogPostCommentContentMetadata">
          <span className="blogPostCommentContentDate">{props.date}</span>
        </div>
        <div className="blogPostCommentContentText">{props.text}</div>
      </div>
    </div>
  );
};

export default SingleComment;
