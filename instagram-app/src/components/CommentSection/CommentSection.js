import React from 'react';
import Comment from './Comment'

const CommentSection = props => {
    return (
        <Comment comments={props.comments}/>
    )
}

export default CommentSection;