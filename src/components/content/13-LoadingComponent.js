import React from "react";

export const Loading = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col loading-symbol">
          <i className="fa fa-spinner fa-spin fa-3x fa-fw text-success" />
        </div>
      </div>
    </div>
  );
};
