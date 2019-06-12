import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
        {props.data.map(user => {
            return (
            <CommentSection comments={user.comments} key={user.id} />
            );
        })}
}

export default PostContainer;