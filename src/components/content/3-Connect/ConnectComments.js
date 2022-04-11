

const ConnectComments = ({ comments }) => {
    return comments.map((comment) => {
      return (
        <div key={comment.id} className="col-md-5 m-1">
          {comment.name}, {comment.message}
          <p>
            Posted on {comment.date} to {comment.forum}
          </p>
        </div>
      );
    });
  };

  export default ConnectComments