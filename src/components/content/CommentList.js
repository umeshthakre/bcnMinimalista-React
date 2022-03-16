import React from "react";

const CommentList = (props) => {
  return (
    <div>
      <ul>
        {props.comments.map((comment) => (
          <p key={comment.id}>
            {comment.email}  - {comment.comment}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
