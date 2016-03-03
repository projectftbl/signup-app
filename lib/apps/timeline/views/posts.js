import React from 'react';

export default props => {
  return (
    <div>
      {props.posts.data.map(post => {
        <div key={post.id}>{post.text}</div>
      })}
    </div>
  );
}