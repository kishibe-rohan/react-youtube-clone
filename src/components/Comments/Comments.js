import React from "react";
import Comment from "./Comment/Comment";

import "./_comments.scss";

function Comments() {
  const handleComment = () => {};
  return (
    <div className="comments">
      <p>611 Comments</p>
      <div className="comments_form d-flex w-100 my-2">
        <img
          className="rounded-circle mr-3"
          src="https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png"
          alt="user_icon"
        />
        <form onClick={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            placeholder="Write a comment.."
            className="flex-grow-1"
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments_list">
        {[...Array(5)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
}

export default Comments;
