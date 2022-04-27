import React, { useState } from "react";
import Footer from "../ui/Footer";
import { useFormik } from "formik";
import "../../styles/components/ConnectComponent.css";

const Connect = (props) => {
  const allForum = [
    "all",
    ...new Set(props.comments.map((comment) => comment.forum)),
  ];
  console.log(allForum);

  const [comment, setComment] = useState(props.comments);
  const [forum, setForum] = useState(allForum);
  const [currentForum, setCurrentForum] = useState("all");

  const filterItems = (forum) => {
    if (forum === "all") {
      setComment(props.comments);
      return;
    }
    const filteredComments = props.comments.filter(
      (comment) => comment.forum === forum
    );
    setComment(filteredComments);
    setCurrentForum(forum);
  };

  const updateCommentView = () => {
    console.log(props.comments);
    console.log(currentForum);
    const filteredComments = props.comments.filter(
      (comment) => comment.forum === currentForum
    );
    setComment(filteredComments);
  };

  //form formik
  const formik = useFormik({
    initialValues: {
      name: "",
      comment: "",
      forum: "",
    },
    onSubmit: (values, { resetForm }) => {
      setComment({
        name: values.name,
        comment: values.comment,
      });
      resetForm();
    },
  });

  const addCommentHandler = (values) => {
    console.log(values);

    props.addComment(" ", values.name, currentForum, values.message, "date");
    props.updateCommentView();
  };

  return (
    <React.Fragment>
      <div className="connect-container">
        <div className="connect__title">
          <p className="connect__title-text">chat with your community</p>
        </div>
        <div className="connect__forum-options">
          {forum.map((forum, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={() => filterItems(forum)}
              >
                {forum}
              </button>
            );
          })}
        </div>
        <div className="connect__form-container">
          <form className="connect__form" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="form-control"
              />
              <label htmlFor="name">Comment</label>
              <input
                type="text"
                name="comment"
                value={formik.values.comment}
                onChange={formik.handleChange}
                className="form-control"
              />
            </div>
          </form>
        </div>
        <div className="connect__comments-container">
          {comment.map((comment) => {
            return (
              <div key={comment.id} className="connect__comment-body">
                <div className="connect__comment-user">{comment.name}</div>
                <div className="connect__comment-message">
                  {comment.message}
                </div>
                <div className="connect__comment-date">
                  Posted on {comment.date} to {comment.forum}
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Connect;
