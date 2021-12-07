import React from 'react';
import "./Comment.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';

const Comment = ({ comment }) => {
  return (
    <div className='comment'>
        <AccountCircleIcon fontSize="large" className="header_icon"/>
        <div className="commentContent">
          <h3 className="commentText"> {comment? comment.username : null} </h3>
          <br/>
          <p className="commentText">{comment? comment.message : null} </p>
        </div>
    </div>
  );
}

export default Comment;