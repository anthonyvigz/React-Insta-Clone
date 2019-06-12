import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
          {props.data.map(user => {
            return (
              <CommentSection comments={user.comments} key={user.id} />
            );
          })}
        </div>
      );
}

export default PostContainer;