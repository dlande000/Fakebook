import React from 'react';
import CommentForm from './comment_form';
import Comments from './comments';

class CommentsAllComponents extends React.Component {

    render() {
    return (
        <div>
            <Comments comments={this.props.post.comments} users={this.props.users}/>
            <CommentForm currentUser={this.props.currentUser} postId={this.props.post.id} createComment={this.props.createComment}/>
        </div>
        )
    }
}

export default CommentsAllComponents;