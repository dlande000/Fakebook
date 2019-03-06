import React from 'react';
import Comment from './comment';

class Comments extends React.Component {
    render() {

    const commentsArr = Object.values(this.props.comments);

    let formattedComments = [];
    if (commentsArr.length > 0) {
    formattedComments = commentsArr.map((comment, id) => {
            return (<Comment key={id} comment={comment} users={this.props.users}/>);
        });
    }

    return (
        <div>
            {formattedComments}
        </div>
        )
    }
}

export default Comments;