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

  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(props.comments);
  const [forum, setForum] = useState("all");

  const filterItems = (forum) => {
    setForum(formik.values.forum);
    if (formik.values.forum === "all") {
      setCommentList(props.comments);
      return;
    } else {
      props.comments.filter((comment) => comment.forum === forum);
    }
  };

  const addCommentHandler = (values) => {
    console.log(values);

    props.addComment(" ", values.name, values.forum, values.message, "date");
    props.updateCommentView();
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
            <button type="submit">submit</button>
          </form>
        </div>
        <div className="connect__comments-container">
          {props.comments.map((comment) => {
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
