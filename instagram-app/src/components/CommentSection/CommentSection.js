import React from 'react';
import Comment from './Comment'

const CommentSection = props => {
    console.log(props.comments)
    return (
      <div>
          {props.comments.map( comments => {
              return (
                <Comment 
                  username={comments.username}
                  comment={comments.text}
                  key={comments.id}
                />  
              );
          })}
      </div>
    );
}

export default CommentSection;