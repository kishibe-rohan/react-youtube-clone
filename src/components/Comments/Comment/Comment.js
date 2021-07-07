import React from "react";
import moment from "moment";

import "./_comment.scss";

const Comment = () => {
  return (
    <div className="comment p-2 d-flex ">
      <img
        src="https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png"
        alt="user_icon"
        className="rounded-circle mr-3"
      />
      <div className="comment_body">
        <p className="comment_header mb-1">
          User Name - {moment("2020-06-11").fromNow()}
        </p>
        <p className="mb-0">User Commented this hello hey test comment</p>
      </div>
    </div>
  );
};

export default Comment;
