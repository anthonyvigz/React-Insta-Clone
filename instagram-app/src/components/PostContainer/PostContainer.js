import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
        console.log(props)

        return (
            <div>
                {props.data.map( post => {
                    return (
                    <div>
                        <div>{post.username}</div>
                        <img src={post.imageUrl} alt={post.id} />
                        <CommentSection comments={post.comments} key={post.id} />
                    </div>
                    );
                })}
            </div>
          );
}

export default PostContainer;