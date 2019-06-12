import React from 'react';
import Comment from './Comment'

const CommentSection = props => {
    return (
        <div>
          {props.data.map(comment => {
            return (
              <Comment 
                text={comment.text}
                user={comment.username}
              />
            );
          })}
        <input type="text" />
        </div>
    )
}

export default CommentSection;