import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
    render() {
    
    const author = (<Link to={`/home/users/${this.props.comment.author_id}`}>
    {this.props.users[this.props.comment.author_id].first_name} {this.props.users[this.props.comment.author_id].last_name}
    </Link>);

var periods = {
    year: 365 * 30 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000
  };

  const time = ((new Date()) - (new Date(this.props.comment.created_at)))
  
  function formatTime(time) {
  
    if (time > periods.year) {
        return Math.floor(time / periods.year) + "y";
    } else if (time > periods.month) {
      return Math.floor(time / periods.month) + "mon";
    } else if (time > periods.week) {
      return Math.floor(time / periods.week) + "w";
    } else if (time > periods.day) {
      return Math.floor(time / periods.day) + "d";
    } else if (time > periods.hour) {
      return Math.floor(time / periods.hour) + "h";
    } else if (time > periods.minute) {
      return Math.floor(time / periods.minute) + "m";
    } else {
    return "Just now";
    }
  }

    const timeAgoComment = (<p>{formatTime(time)}</p>)

    return (
        <div className="comment">
            {author}
            <div>
                <p>{this.props.comment.body}</p>
                {timeAgoComment}
            </div>
        </div>
        )
    }
}

export default Comment;