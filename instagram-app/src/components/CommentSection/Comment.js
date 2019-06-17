import React from 'react';

const Comment = props => {
    console.log(props.text)
    return (
        <div>
            {props.username}
            {props.comment}
        </div>
    )
}

export default Comment;