import React from 'react';
import SingleComment from './SingleComment';
import UserCard from './UserCard';
import Profile1 from './images/pic-1.jpeg';
import Profile2 from './images/pic-2.jpeg';
import Profile3 from './images/pic-3.jpeg';

import './BlogCommentApp.css';
const commenters = [
  'Wafiqah',
  'Tishya',
  'Femida',
  'Farzana',
  'Aalima',
  'Abdullah',
];

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}
const BlogCommentApp = () => {
  return (
    <div className="blog-container">
      <UserCard>
        <SingleComment
          name={commenters[0]}
          date="Today at 5:00pm"
          text="It is amazing!"
          picture={Profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name={commenters[1]}
          date="Today at 7:00pm"
          text="Wonderful!"
          picture={Profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name={commenters[2]}
          date="Today at 8:00pm"
          text="Nice, Thanks!"
          picture={Profile3}
        />
      </UserCard>
    </div>
  );
};

export default BlogCommentApp;
