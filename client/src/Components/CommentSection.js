import React, { useState} from 'react';
import { TextField, Button } from "@material-ui/core";
import Comment from "./Comment"
import "./CommentSection.css";
import { commentOnRestaurant } from "../Apis/Restaurant"

const CommentSection = ({ comments, myAccountId, myUsername, restaurantId }) => {
  const [commentInput, setCommentInput] = useState(null);
  const [curComments, setCurComments] = useState(comments);
  
  const onCommentInputChange = (event) => {
    setCommentInput(event.target.value)
  }

  const onCommentSubmit = async () => {
    const comments = await commentOnRestaurant(restaurantId, { userId: myAccountId, username: myUsername, message: commentInput});
    setCurComments(comments)
  }

  return (
    <div>
      <TextField className="commentInput" type="text" placeholder="Leave a comment" 
                  variant="outlined" value={commentInput}
                  onChange={onCommentInputChange} margin="normal" minRows="4" multiline/>
      <div className="commentSubmit">
        <Button variant="contained" onClick={onCommentSubmit}>Submit</Button>
      </div>
      
      <div>
        <ul className='comments'>
          { curComments && curComments.map((comment) => {
              return (<Comment comment={comment} key={comment._id}/>);
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default CommentSection;