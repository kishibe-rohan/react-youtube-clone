import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import numeral from "numeral";
import Comment from "./Comment/Comment";
import { fetchComments, addComment } from "../../redux/actions/commentActions";
import "./_comments.scss";

function Comments({ videoId, totalComments }) {
  const dispatch = useDispatch();
  const [text, setText] = useState(" ");
  const { picture } = useSelector((state) => state.auth?.userProfile);

  useEffect(() => {
    dispatch(fetchComments(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentsList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    dispatch(addComment(videoId, text));

    setText(" ");
  };

  return (
    <div className="comments">
      <p>{numeral(totalComments).format("0.a")} &nbsp; Comments</p>
      <div className="comments_form d-flex w-100 my-2">
        <img className="rounded-circle mr-3" src={picture} alt="user_icon" />
        <form onClick={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            placeholder="Write a comment.."
            className="flex-grow-1"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments_list">
        {_comments?.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
