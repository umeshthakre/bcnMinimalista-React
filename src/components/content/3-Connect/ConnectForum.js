import React from "react";

const ForumOptions = ({ forum, filterItems }) => {
  return (
    <div>
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
  );
};

export default ForumOptions;