import React from 'react';
import Post from './Post';
import './Posts.css';

// const Posts = (props) => {
  // const { likePost, posts } = props;
const Posts = ({ likePost, posts }) => {
  return (
    <div className='posts-container-wrapper'>
      {posts.map((item) => (
        <Post key={item.id} post={item} likePost={likePost} />
      ))}
    </div>
  );
};

export default Posts;
