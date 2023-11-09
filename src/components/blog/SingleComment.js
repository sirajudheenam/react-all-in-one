import React from 'react';

const SingleComment = (props) => {
  return (
    <div className="blog-post-comment">
      <a href="/" className="blog-post-comment-avatar">
        <div className="blog-post-comment-avatar-div">
          <img
            src={props.picture}
            alt="profile"
            className="blog-post-comment-avatar-div-image"
          />
        </div>
      </a>
      <div className="blog-post-comment-content">
        <a href="/" className="blog-post-comment-content-author">
          {props.name}
        </a>
        <div className="blog-post-comment-content-metadata">
          <span className="blog-post-comment-content-date">{props.date}</span>
        </div>
        <div className="blog-post-comment-content-text">{props.text}</div>
      </div>
    </div>
  );
};

export default SingleComment;
