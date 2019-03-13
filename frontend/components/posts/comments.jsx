import React from 'react';
import Comment from './comment';

class Comments extends React.Component {
    render() {

        const commentsArr = Object.values(this.props.comments);

        let formattedComments = [];
        if (commentsArr.length > 0) {
            formattedComments = commentsArr.map((comment, id) => {
                return (<Comment
                    createLike={this.props.createLike}
                    deleteLike={this.props.deleteLike}
                    key={id} comment={comment}
                    users={this.props.users}
                    currentUser={this.props.currentUser}
                    postAuthorId={this.props.postAuthorId}
                    postReceiverId={this.props.postReceiverId}
                    updateComment={this.props.updateComment}
                    postId={this.props.postId}
                />);
            });
        }

        return (
            <div className="comment-container">
                {formattedComments}
            </div>
        )
    }
}

export default Comments;