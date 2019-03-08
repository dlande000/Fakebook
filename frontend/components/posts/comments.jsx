import React from 'react';
import Comment from './comment';

class Comments extends React.Component {
    render() {

    const commentsArr = Object.values(this.props.comments);

    let formattedComments = [];
    if (commentsArr.length > 0) {
    formattedComments = commentsArr.map((comment, id) => {
            debugger
            return (<Comment key={id} comment={comment} users={this.props.users}/>);
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