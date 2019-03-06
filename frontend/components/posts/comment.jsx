import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
    render() {
        debugger
    const author = (<Link to={`/home/users/${this.props.comment.author_id}`}>
    {this.props.users[this.props.comment.author_id].first_name} {this.props.users[this.props.comment.author_id].last_name}
    </Link>);

    return (
        <div>
            {author}
            <div>
                <p>{this.props.comment.body}</p>
            </div>
        </div>
        )
    }
}

export default Comment;