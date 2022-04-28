import React, { useState } from "react";
import { COMMENTS } from "../../shared/comments";
import Footer from "../ui/Footer";
import { useFormik } from "formik";
import "../../styles/components/ConnectComponent.css";

const Connect = (props) => {

  //imoprt comments data from shared folder
    const commentsArray = COMMENTS;

  //state management
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(commentsArray);
  const [forum, setForum] = useState("all");

  //create an array of all available forums within commentsArray
  const allForum = [
    "all",
    ...new Set(commentsArray.map((comment) => comment.forum)),
  ];

  //set forum value in form / filter comments in comments list 
  const filterItems = (forum) => {
    setForum(formik.values.forum)
    console.log(forum)
    if (forum === "all") {
      setCommentList(commentsArray);
      return;
    } else {
      commentsArray.filter((comment) => comment.forum === forum);
    }
  };

  const addCommentHandler = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      comment: "",
      forum: "all",
    },
    onSubmit: (values, { resetForm }) => {
      addCommentHandler({
        name: values.name,
        comment: values.comment,
        forum: values.forum,
      });
      resetForm();
    },
  });

  return (
    <React.Fragment>
      <div className="connect-container">
        <div className="connect__title">
          <p className="connect__title-text">chat with your community</p>
        </div>
        <div className="connect__form-container">
          <form className="connect__form" onSubmit={formik.handleSubmit}>
            <div className="connect__forum-options">
              {allForum.map((forum, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => filterItems(forum)}
                    value={formik.values.forum}
                    onChange={formik.handleChange}
                  >
                    {forum}
                  </button>
                );
              })}
            </div>
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
            <button onClick={addCommentHandler} type="submit">
              submit
            </button>
          </form>
        </div>
        <div className="connect__comments-container">
          {commentsArray.map((comment) => {
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
